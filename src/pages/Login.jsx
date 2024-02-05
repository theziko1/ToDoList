import React , {useState} from 'react'
import Button from '../components/Button'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'
import Input from '../components/Input'


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
          const response = await axios.post("http://localhost:3000/user/login", { userName, password });
          console.log('Login Successful:', response.data);
          navigate("/home")
       
        } catch (error) {
          console.error('Error during Login:', error.response.data);
          setErrors(error.response.data)
        }
      };
  return (
    <>
     <div className="bg-gradient-to-r from-blue-500 to-purple-700 m-0 p-0 h-screen flex justify-center items-center">
        <section className='bg-white p-6 w-1/2 h-5/6 rounded'>
            <h1 className='text-5xl text-purple-700 font-bold font-[Inter] flex justify-center'>Login</h1>
           
                <div className="w-full grid grid-cols-1 gap-2 p-6 m-2">
                    <label htmlFor="" className="font-semibold font-[Inter] mx-auto">User Name</label>
                    <Input type="text" value={userName} className='border border-black h-10' onChange={(e) => setUserName(e.target.value)} /> 
                
                
                        
                    <label htmlFor="" className="font-semibold font-[Inter] mx-auto" >Password</label>
                        <Input type="password" className='border border-black h-10'value={password} onChange={(e) => setPassword(e.target.value)}/>
                   <Button className="bg-gradient-to-r from-blue-500 to-purple-700" onClick={handleLogin}>Connect User</Button >
                </div>
                { errors.error && <span className=" w-full flex bg-red-400 p-2 justify-center font-bold rounded text-white font-[poppins]">
                  { errors.error}
                  </span> }
                <div className="w-full flex justify-around items-center">
                    <h6 className='font-[Inter] font-semibold'>Are you Registered ?</h6>
                   <Link to="/"> <Button className="justify-center bg-red-500">Sign Up</Button ></Link>
                </div>
            
        </section>
    </div>
    </>
  )
}

export default Login