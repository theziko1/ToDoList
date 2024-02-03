import React , {useState} from "react";
import { LuListTodo } from "react-icons/lu";
import Table from "../components/Table";
import Modal from "./Modal";
import Card from '../components/Card.jsx'
import Button from "../components/Button.jsx";



const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const [inputValue,setInputValue]=useState(' ');
  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 m-0 p-0 h-screen flex justify-center items-center">
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
