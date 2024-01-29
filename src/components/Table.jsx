import React from "react";

const Table = () => {
  return (
    <>
      <table className="gap-6 flex flex-col items-center justify-center bg-white">
        
          <tr className="w-full flex justify-around">
            <th className="p-6">Id</th>
            <th className=" p-6 ">Task</th>
            <th className="p-6 ">Priority</th>
            <th className="p-6">Actions</th>
          </tr>
       
        <tr className="bg-gray-50 w-full flex justify-around">
          <td className="p-4 border-b">Ligne 1, Colonne 1</td>
          <td className="p-4 border-b">Ligne 1, Colonne 2</td>
          <td className="p-4 border-b">Ligne 1, Colonne 3</td>
          <td className="p-4 border-b">Ligne 1, Colonne 4</td>
        </tr>
        <tr className="bg-white w-full flex justify-around">
          <td className="p-4 border-b">Ligne 2, Colonne 1</td>
          <td className="p-4 border-b">Ligne 2, Colonne 2</td>
          <td className="p-4 border-b">Ligne 2, Colonne 3</td>
          <td className="p-4 border-b">Ligne 2, Colonne 4</td>
        </tr>
      </table>
    </>
  );
};

export default Table;
