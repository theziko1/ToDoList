import React , {useEffect, useState} from 'react'
import { TfiClose } from "react-icons/tfi";
import {  MdEditDocument  , MdEditSquare} from "react-icons/md";
import axios from 'axios';
import { Link , useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Input'


const UpdateTask = () => {
    
    const [Updatetasks, setUpdatetasks] = useState({

        Title :"",
        priority : "",
        status : "",
        deadline :"",
        description : "",
        user : {
           userName : ""
        }
        
    
      });
      const taskId = useParams().id
      const Navigate = useNavigate()

      const getTask = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/api/tasks/${taskId}`);
          
          setUpdatetasks(res.data.data);
         
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getTask()

      
      }, [taskId])

      const UpdateTask = async () => {
        try {
          const confirmUpdateState = window.confirm('Are you sure to update this task ?')
          if (confirmUpdateState) {
            await axios.put(`http://localhost:3000/api/tasks/${taskId}`,Updatetasks)
          }
          Navigate("/home")
            
        } catch (error) {
          console.log(error)
        }
      }
 
  return (
    <>
   <div className="bg-gradient-to-r from-blue-500 to-purple-700 m-0 p-0 h-screen flex justify-center items-center">
      <section className="bg-white w-[80%] h-[75%] rounded-2xl flex flex-col p-8 m-8 items-center justify-center">
        <div className='flex justify-center gap-4'>
        <MdEditDocument className='text-3xl'/>
        <h1 className="w-full text-3xl text-center italic font-bold justify-center font-[Inter]">  Update Task</h1>
        </div>
        
         <div className="w-full grid grid-cols-2 grid-rows-1 gap-4">
            <div>
              <label
              htmlFor="name" className="block text-sm font-medium text-gray-600"   >
              Title
            </label>
            <Input
              type="text"
              id="name"
              name="Title"
              value={Updatetasks.Title}
              onChange={(e) => {setUpdatetasks({...Updatetasks, Title : e.target.value})}}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter you task"
            />
             </div>
             <div>
            <label
              htmlFor="priorité"
              className="block text-sm font-medium text-gray-600"
            >
              Priorité
            </label>
            <Input
              type="text"
              id="priority"
              name="priority"
              value={Updatetasks.priority}
              onChange={(e)=>{setUpdatetasks({...Updatetasks, priority : e.target.value})}}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Priority of your task"
            />
            </div>

            <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Status
            </label>
            <Input
              type="text"
              id="status"
              name="status"
              value={Updatetasks.status}
              onChange={(e)=>{setUpdatetasks({...Updatetasks, status : e.target.value})}}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="status de votre task"
            />
         </div>
         <div>
            <label
              htmlFor="Description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <Input
              type="text"
              id="description"
              name="description"
              value={Updatetasks.description}
              onChange={(e)=>{setUpdatetasks({...Updatetasks, description : e.target.value})}}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Describe your task"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Created by
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={Updatetasks.user.userName}
              onChange={(e)=>{setUpdatetasks({...Updatetasks, userName : e.target.value})}}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
         
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
            Deadline
          </label>
          <Input
            type="date"
            id="deadline"
            name="deadline"
            value={Updatetasks.deadline}
            onChange={(e)=>{setUpdatetasks({...Updatetasks, deadline : e.target.value})}}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

       
          </div>
          <section className="flex justify-center items-center gap-12 mx-auto my-auto">
          <Link to="/home" >
            <TfiClose
              color="red"
             
            /></Link >
             <MdEditSquare
            color="green"
            onClick={() => UpdateTask()}
           
          />
          </section>  
             
          
     

       
      </section>
    </div>
    </>
  )
}

export default UpdateTask