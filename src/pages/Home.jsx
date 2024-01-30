import React , {useState} from "react";
import { LuListTodo } from "react-icons/lu";
import Table from "../components/Table";
import Modal from "./Modal";


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 m-0 p-0 h-screen flex justify-center items-center">
        <section className="bg-white w-[80%] h-[75%] rounded-2xl">
          <div className="flex justify-start m-4 gap-4 text-xl">
            <div className="text-3xl">
              <LuListTodo />
            </div>
            <h1 className="font-['Inter'] font-semibold italic text-3xl">Task Lists</h1>
          </div>
          <Table />
          
          <div className="flex justify-end items-end">
          <button  onClick={()=>setShowModal(true)} className="bg-blue-500 font-['Inter'] text-white p-4 font-bold w-fit rounded m-4">Add Task</button>
          </div>
        </section>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} name="ADD TASK"/>
    </>
  );
};

export default Home;
