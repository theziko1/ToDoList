import React from "react";
import { TfiClose } from "react-icons/tfi";
import { MdAddTask } from "react-icons/md";
const Modal = ({ onClose, visible, name }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
      <section className="bg-blue-200 w-[80%] h-[75%] rounded-2xl flex flex-col p-8 m-8 items-center justify-center">
        <h1 className="w-full text-3xl text-center font-bold justify-center font-[Inter]">{name}</h1>
     
        
         <div className="w-full grid grid-cols-2 gap-2">
            <div className="w-full">
              <label
              htmlFor="name" className="block text-sm font-medium text-gray-600"   >
              Title
            </label>
            <input
              type="text"
              id="name"
              name="title"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter you task"
            />
         
            <label
              htmlFor="priorité"
              className="block text-sm font-medium text-gray-600"
            >
              Priorité
            </label>
            <input
              type="text"
              id="priorité"
              name="priorité"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Priority of your task"
            /></div>
         

          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="status de votre task"
            />
         
            <label
              htmlFor="Description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Describe your task"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Crée par
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          
         
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className=" w-full">
          <label htmlFor="time" className="block text-sm font-medium text-gray-600">
            Set Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
       
          </div>
          <section className="flex justify-center items-center gap-12 mx-auto my-auto">
          <button
          onClick={() => {
            onClose();
          }}
        >
            <TfiClose
              color="red"
             
            /></button>
             <MdAddTask
            color="green"
           
          />
          </section>  
             
          
     

       
      </section>
    </div>
  );
};

export default Modal;
