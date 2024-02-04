import  {User}  from "../models/Schema.js";
import  bcrypt  from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken"

config()

const signUp = async (req, res) => {
   const { userName, email, password } = req.body;
  try {
    
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(password, salt );
    await User.create({ userName, email, password: passHash });
    res
      .status(200)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    // if (error.name === 'ValidationError') {
    //   // Handle validation errors
    //   const validationErrors = {};
    //   for (const field in error.errors) {
    //     validationErrors[field] = error.errors[field].message;
    //   }
    //   return res.status(400).json({ errors: validationErrors });
    // }
    res.status(500).json({ success: false, error: "couldn't create user!"+error });
  }
};

// Login Method

const login = async (req  , res ) => {
  try { 
     
     const { userName , password} = req.body
     const UserLogin = await User.findOne({ userName })  
 
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


  // get Username 
  const GetUserName = async (req , res) => {
      
      try {
         
         const Allusernames = await User.find()
         
         res.status(200).json({ success : true , message : "users found " , data : Allusernames})
      } catch (error) {
         res.status(500).json({ success : false , message : "users not found "})
      }
  }
  const UserController = {signUp , login , logout , GetUserName};
  
  export default UserController
