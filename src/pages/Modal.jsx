import React, { useState , useEffect }  from "react";
import { TfiClose } from "react-icons/tfi";
import { MdAddTask } from "react-icons/md";
import { SiAddthis } from "react-icons/si";
import Input from '../components/Input'
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";


const Modal = ({ onClose, visible, name }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [users , setUsers] = useState([])
  const [selectedUsername, setSelectedUsername] = useState('');
  const [errors, setErrors] = useState({
    error : ""
  });
  const Navigate = useNavigate()

  const GetUsers = async () =>{
    
     
    try {
      
       const res = await axios.get("http://localhost:3000/user/allUsers")
        
         setUsers(res.data.data) 
        
    }    
    catch (error) {
     
        setErrors(error.res);
        
    }
  }
  const handleAddTask = async (e) => {
    e.preventDefault();
     
    try {
      const selectedUser = users.find(user => user.userName === selectedUsername);
      
      
      const newTask = {
        Title: taskTitle,
        status : taskStatus,
        priority : taskPriority,
        deadline : taskDeadline,
        description: taskDescription,
        user: selectedUser._id,
      };
        
       await axios.post("http://localhost:3000/api/tasks", newTask)
       
        Navigate("/home")
        
        
    }    
    catch (error) {
      console.log(error)
        setErrors(error.response.data);
        
    }
      
  };

  useEffect(() => {
    GetUsers()
  }, [selectedUsername])
  
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
      <section className="bg-white w-[80%] h-[75%] rounded-2xl flex flex-col p-8 m-8 items-center justify-center">
        <div className="flex justify-center gap-4">
          <SiAddthis className="text-3xl"/>
        <h1 className="w-full text-3xl italic text-center font-bold justify-center font-[Inter]">{name}</h1>
        <ul>
      </ul>
        </div>
        
         <div className="w-full grid grid-cols-2 grid-rows-1 gap-4">
            <div >
             
            <Input
              label="title"
              type="text"
              id="name"
              name="Title"
              value={taskTitle}
              onChange={(e)=>setTaskTitle(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter you task"
            />
         </div>
         <div>
            
            <Input
              label="priority"
              type="text"
              id="priority"
              name="priority"
              value={taskPriority}
              onChange={(e)=>setTaskPriority(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Priority of your task"
            /></div>
         

          <div >
            
            <Input
              label="status"
              type="text"
              id="status"
              name="status"
              value={taskStatus}
              onChange={(e)=>setTaskStatus(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="status of your task"
            />
             
         </div>
         <div>
            
            <Input
              label="description"
              type="text"
              id="description"
              name="description"
              value={taskDescription}
              onChange={(e)=>setTaskDescription(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Describe your task"
            />
          </div>
          <div >
          
            <label htmlFor="user" className="block text-sm font-medium text-gray-600">Select User</label>
        <select className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" onChange={(e) => setSelectedUsername(e.target.value)}>
          <option value="user">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user.userName}>
              {user.userName}
            </option>
          ))}
        </select>
          </div>
          <div>
         
          <Input
            label="deadline"
            type="date"
            id="deadline"
            name="deadline"
            value={taskDeadline}
            onChange={(e)=>setTaskDeadline(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        
          </div>
          { errors.error && <span className=" w-full flex bg-red-400 p-2 justify-center font-bold rounded text-white font-[poppins]">
                  { errors.error}
                  </span> } 
          <section className="flex justify-center items-center gap-12 mx-auto my-auto">
          <Button className="bg-white"
          onClick={() => {
            onClose();
          }}
        >
            <TfiClose
              color="red"
             
            /></Button >
             <MdAddTask
            color="green"
            onClick={handleAddTask}
           
          />
          </section>  
             
          
     

       
      </section>
    </div>
  );
};

export default Modal;
