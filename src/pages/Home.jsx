import React , {useState} from "react";
import { LuListTodo } from "react-icons/lu";
import Table from "../components/Table";
import Modal from "./Modal";
import Button from "../components/Button.jsx";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

  const Navigate = useNavigate()

  const handleLogout = async () => {
    try {
      
      await axios.get("http://localhost:3000/user/logout");
      Navigate("/login")

      
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
 

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 m-0 p-0 h-screen flex flex-col justify-center items-center gap-4">
      <div className=" absolute top-0 right-0  bg-white p-2 m-2 rounded gap-8">
      <CgProfile className="text-xl"color="blue"/>
        <h5 className="font-bold font-[Inter]">Welcome</h5>
        <Button onClick={handleLogout}>
        <LuLogOut color="white" className="text-xl" />
        </Button>
      </div>
        <section className="bg-white w-[80%] h-[75%] rounded-2xl">
          <div className="flex justify-start m-4 gap-4 text-xl">
            <div className="text-3xl">
              <LuListTodo />
            </div>
            <h1 className="font-['Inter'] font-semibold italic text-3xl">Tasks List</h1>
          </div>
          <Table />
          
          <div className="flex justify-end items-end">
          <Button  onClick={()=>setShowModal(true)} className="bg-blue-500 font-['Inter'] text-white p-4 font-bold w-fit rounded m-4">Add Task</Button>
          </div>
        </section>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} name="ADD TASK"/>
    </>
  );
};

export default Home;
