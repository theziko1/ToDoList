import React from 'react'

const Table = () => {
  return (
    <>
    <table className="gap-6 flex flex-col items-center justify-center bg-white">
   
        <tr>
            <th className="p-6">Id</th>
            <th className=" p-6 ">Task</th>
            <th className="p-6 ">Priority</th>
            <th className="p-6">Actions</th>
        </tr>
        <tr >
            <td >Ligne 1, Colonne 1</td>
            <td >Ligne 1, Colonne 2</td>
            <td >Ligne 1, Colonne 3</td>
            <td>Ligne 1, Colonne 4</td>
        </tr>
        <tr>
            <td>Ligne 2, Colonne 1</td>
            <td>Ligne 2, Colonne 2</td>
            <td>Ligne 2, Colonne 3</td>
            <td>Ligne 2, Colonne 4</td>
        </tr>
    </table>

    </>
  )
}

export default Table