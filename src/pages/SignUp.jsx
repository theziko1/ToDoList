import React, { useState } from 'react'
import Button from '../components/Button'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'



const SignUp = () => {
    const [userName , setUserName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setData({
    //       ...data,
    //       [e.target.name]: value
    //     });
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
            // const formDataToSend = new FormData();
            // formDataToSend.append('name', data.userName);
            // formDataToSend.append('email', data.email);
            // formDataToSend.append('password', data.password);
        try {
            
            const response = await axios.post("http://localhost:3000/user/signup", { userName ,email , password });
            console.log('Signup successful:', response.data);
            Navigate("/home")
          } catch (error) {
            console.error('Signup failed:', error.response.data);
            
            
          }
      };


  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 to-purple-700 m-0 p-0 h-screen flex justify-center items-center">
        <section className='bg-white p-6 w-1/2 h-5/6 rounded'>
            <h1 className='text-5xl text-purple-700 font-bold font-[Inter] flex justify-center'>Sign Up</h1>
            
                <div className="w-full grid grid-cols-1 gap-2 p-2 m-2">
                    <label htmlFor="username" className="font-semibold font-[Inter] mx-auto">User Name</label>
                        <input type="text" name="userName" onChange={(e) => setUserName(e.target.value)} value={userName} className='border border-black h-10' />
                    <label htmlFor="email" className="font-semibold font-[Inter] mx-auto">Email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className='border border-black h-10'/>
                        
                    <label htmlFor="password" className="font-semibold font-[Inter] mx-auto">Password</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className='border border-black h-10'/>
                   <Button onClick={handleSubmit}  className="bg-gradient-to-r from-blue-500 to-purple-700" >Create User</Button >
                   
                </div>
            
                <div className="w-full flex justify-between items-center">
                    <h6 className='font-[Inter] font-semibold'>Do you have an Account ?</h6>
                   <Link to="/login"> <Button className="justify-center bg-red-500">Login</Button ></Link>
                </div>
           
        </section>
    </div>
    </>
  )
}

export default SignUp 