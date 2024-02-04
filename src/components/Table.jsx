import React, { useState, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import { FaCheck } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import axios from "axios";
import Badge from "./Badge";
import { Link , useNavigate } from "react-router-dom";


const Table = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState({
    id : "",
    Title :"",
    priority : "",
    status : "",
    deadline :"",
    description : "",

  });



  const Navigate = useNavigate()
  

  const getAllTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/tasks");

      setTasks(res.data.task);
      Navigate("/home")
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateStateTask = async (taskId) => {
    try {
      const confirmUpdateState = window.confirm('Are you sure to switch task to Completed?')
      if (confirmUpdateState) {
        await axios.put(`http://localhost:3000/api/tasks/${taskId}`,{
        ...tasks,
         status : "Completed"})
      }
      window.location.reload(false)
        
    } catch (error) {
      console.log(error)
    }
  }

  const DeleteTask = async (taskId) => {
    try {
      const confirmDelete = window.confirm('Are you sure to delete this Task?')
      if (confirmDelete) {
        await axios.delete(`http://localhost:3000/api/tasks/${taskId}`)
      }
      window.location.reload(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   

    getAllTasks();
    
  }, [tasks.id]);


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <>
      <div className="overflow-y-auto max-h-64">
        <table className="table-auto w-full gap-6 flex flex-col items-center justify-center bg-white font-['Inter']">
          <thead className="w-full flex justify-around">
            <tr className="w-full flex justify-around">
              <th className="py-2 px-4 border-b h-10">Title</th>
              <th className="py-2 px-4 border-b h-10">Priority</th>
              <th className="py-2 px-4 border-b h-10">Status</th>
              <th className="py-2 px-4 border-b h-10">Description</th>
              <th className="py-2 px-4 border-b h-10">Actions</th>
              <th className="py-2 px-4 border-b h-10">Created by</th>
              <th className="py-2 px-4 border-b h-10">Deadline</th>
            </tr>
          </thead>

          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="w-full">
            {tasks.map((task, idx) => (
            <tbody className="w-full flex gap-0 justify-around"key={idx}>
              
                <tr className="w-full flex gap-0 justify-around" >
                  <td className="py-2 px-4 w-fit border-b h-10">{task.Title} </td>
                  <td className="py-2 px-4- w-fit border-b h-10"><Badge className={`${task.priority == "Low" && "bg-green-500"} 
                  || ${task.priority == "Medium" && "bg-yellow-500"} ||
                  ${task.priority == "High" && "bg-red-500"} }`} >{task.priority}</Badge></td>
                  <td className="py-2 px-4 w-fit border-b h-10"><Badge className={`${task.status == "Todo" && "bg-blue-500"} 
                  || ${task.status == "In Progress" && "bg-teal-500"} ||
                  ${task.status == "Completed" && "bg-green-500"} }`}>{task.status}</Badge></td>
                  <td className="py-2 px-4 w-fit border-b h-10">{task.description}</td>
                  <td className="py-2 px-4 w-fit border-b h-10">
                    <span className="flex flex-row  gap-4 justify-center">
                      <FaCheck color="green" onClick={() => UpdateStateTask(task._id)} />
                      <Link to={`/${task._id}`}><MdEditSquare color="blue" /></Link>
                      <IoTrashBin color="red" onClick={() => DeleteTask(task._id)}/>
                    </span>
                  </td>
                  <td className="py-2 px-4 w-fit justify-center border-b h-10">{task.user.userName}</td>
                  <td className=" py-2 px-4 w-fit border-b h-10">{formatDate(task.deadline)}</td>
                </tr>
             
            </tbody>
             ))}</div>
          )}
        </table>

        
      </div>
     
    </>
  );
};

export default Table;
