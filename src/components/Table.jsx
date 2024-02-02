import React, { useState, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import { FaCheck } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import axios from "axios";

const Table = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/tasks");

      setTasks(res.data.task);
      console.log(res.data.task);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const TimeLoading = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);

    getAllTasks();
    console.log(tasks);
    return () => clearTimeout(TimeLoading);
  }, []);

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
            <tbody className="w-full flex justify-around">
              {tasks.map((task, idx) => (
                <tr className="w-full flex justify-around" key={idx}>
                  <td>{task.Title} </td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>{task.description}</td>
                  <td className="py-2 px-4 h-10">
                    <span className="flex flex-row justify-center">
                      <FaCheck color="green" />
                      <IoTrashBin color="red" />
                    </span>
                  </td>
                  <td>{task.user.userName}</td>
                  <td>{task.deadline}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {/* <table  className="table-auto w-full gap-6 flex flex-col items-center justify-center bg-white font-['Inter']">
          <thead>
          <tr className="w-full flex justify-around">
              <th className="py-2 px-4 border-b h-10">Title</th>
              <th className="py-2 px-4 border-b h-10">Priorité</th>
              <th className="py-2 px-4 border-b h-10">Status</th>
              <th className="py-2 px-4 border-b h-10">Description</th>
              <th className="py-2 px-4 border-b h-10">Actions</th>
              <th className="py-2 px-4 border-b h-10">Créer par</th>
              <th className="py-2 px-4 border-b h-10">Deadline</th>
            </tr>
          </thead>
          <tbody> 
            {
              tasks.map((task,idx)=>(
                <tr className="w-full flex justify-around" key={idx}>
                  <td>{task.Title} </td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>{task.description}</td>
                </tr>
              ))
            }
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default Table;
