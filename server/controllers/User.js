import  {User}  from "../models/Schema.js";
import  bcrypt  from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken"

config()

const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const passHash = await bcrypt.hash(password, 10);
    await User.create({ userName, email, password: passHash });
    res
      .status(200)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error: "couldn't create user!"+error });
  }
};

// Login Method

const login = async (req  , res ) => {
  try { 
     
     const { email , password} = req.body
     const UserLogin = await User.findOne({ email })  
 
     if(!UserLogin) {
       return res.status(401).json({error : "Authentication failed"})
     }
     const MatchedPass = bcrypt.compare(password,UserLogin.password)
     if (!MatchedPass) {
        return res.status(401).json({error : "Authentication failed"})
     }
     const token = jwt.sign({ userId: UserLogin._id }, process.env.SECRET_KEY, {
        expiresIn: '6h',
        });
     res.cookie('token',token)   
     res.status(200).json({token}) 
     
  } catch (error) {
     res.status(500).json({error : "login failed "+error})
  }
}




// Logout Method

const logout = (req ,res ) => {
     try {
        res.clearCookie('token')
        res.status(200).json({success : true, message : "logged out"})
     } catch (error) {
        res.status(500).json({success : false, message : "something went wrong "+error})
     }
  }
  const UserController = {signUp , login , logout};
  
  export default UserController
