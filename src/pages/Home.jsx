import React from "react";
import { LuListTodo } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 h-screen flex justify-center items-center">
        <section className="bg-white w-[70%] h-[70%] rounded-2xl">
          <div className="flex justify-start m-4 gap-4 text-xl">
            <div className="text-3xl">
              <LuListTodo />
            </div>
            <h1 className="font-['Inter'] italic text-3xl">Task Lists</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
