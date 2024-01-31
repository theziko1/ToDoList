import  User  from "../models/Schema.js";
import  bcrypt  from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken"

config()

const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const passHash = await bcrypt(password, 10);
    await User.create({ userName, email, password: passHash });
    res
      .status(200)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error: "couldn't create user!" });
  }
};

// Login Method

export const login = async (req  , res ) => {
  try { 
     
     const { email , password} = req.body
     const User = await User.findOne({ email })  
 
     if(!User) {
       return res.status(401).json({error : "Authentication failed"})
     }
     const MatchedPass = bcrypt.compare(password,User.password)
     if (!MatchedPass) {
        return res.status(401).json({error : "Authentication failed"})
     }
     const token = jwt.sign({ userId: User._id }, process.env.SECRET_KEY, {
        expiresIn: '6h',
        });
     res.cookie('token',token)   
     res.status(200).json({token}) 
     
  } catch (error) {
     res.status(500).json({error : "login failed"})
  }
}




// Logout Method

  export const logout = (req ,res ) => {
     try {
        res.clearCookie('token')
        res.status(200).json({success : true, message : "logged out"})
     } catch (error) {
        res.status(500).json({success : false, message : "something went wrong"})
     }
  }
  const UserController = {signUp , login , logout};
  
  export default UserController
