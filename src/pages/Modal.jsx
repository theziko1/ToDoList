import React from 'react'
import { TfiClose } from "react-icons/tfi";
const Modal = ({onClose,visible,name}) => {
 if (!visible) return null
  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        
        
        <button onClick={()=>{
          onClose()
        }}><TfiClose color="red" /></button>
      
    </div>
  )
}

export default Modal