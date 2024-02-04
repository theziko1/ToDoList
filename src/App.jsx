import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'

import './App.css'
import UpdateTask from './pages/UpdateTask'




function App() {
 

  return (
    <>
          <Routes>
           <Route path="/" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
           <Route path="/home" element={<Home />} />
           <Route path="/:id" element={<UpdateTask />} />

         </Routes>
    </>
  )
}

export default App
