import React , {useState , useEffect} from "react";
import Skeleton from "../components/Skeleton";
import { FaCheck } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
const Table = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    
 const TimeLoading = setTimeout(() => {
    setIsLoading(!isLoading)
 },2000)
 
 return () => clearTimeout(TimeLoading);
  }, [])
  
  
  return (

    <>
    <div className="overflow-y-auto max-h-64">
      <table className="table-auto w-full gap-6 flex flex-col items-center justify-center bg-white font-['Inter']">
        
          <tr className="w-full flex justify-around">
            <th className="py-2 px-4 border-b h-10">Title</th>
            <th className="py-2 px-4 border-b h-10">Priorité</th>
            <th className="py-2 px-4 border-b h-10">Status</th>
            <th className="py-2 px-4 border-b h-10">Description</th>
            <th className="py-2 px-4 border-b h-10">Actions</th>
            <th className="py-2 px-4 border-b h-10">Créer par</th>
            <th className="py-2 px-4 border-b h-10">Deadline</th>
          </tr>
       
        
        {isLoading ? (
        
            <Skeleton />
         
        ) : (
              <tr className="w-full flex justify-around">
                <td className="py-2 px-4 border-b h-10">Task 1 </td>
                <td className="py-2 px-4 border-b h-10">Ligne 1</td>
                <td className="py-2 px-4 border-b h-10">Ligne 1</td>
                <td className="py-2 px-4 border-b h-10">Ligne 1</td>
                <td className="py-2 px-4 border-b h-10">
                      <div className="flex flex-row gap-10 justify-center">
                      <FaCheck color="green"/><IoTrashBin color="red"/>
                      </div>
                </td>
              
                <td className="py-2 px-4 border-b h-10">Zakaria</td>
                <td className="py-2 px-4 border-b h-10">Ligne 1</td>
          </tr>
          
          
        
      )}
          
          
      
      </table>
      </div>
    </>
  );
};

export default Table;
