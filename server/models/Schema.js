import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        
    },
    email: { 
      type: String,
      required: true,
      unique: true,
      
      
    },
  
    password: {
      type: String,
      required: true,
    
    },

   
  }
  
  )

const taskSchema = new mongoose.Schema({
    Title:{
      type:String,
      required:true,
},
priority:{
    type:String,
    enum:["High","Medium","Low"],
    default:"Low"
},
status:{
    type:String,
    enum:["Todo", "In Progress", "Completed"],
    default:"Todo",
},
description:{
    type: String
},

deadline:{
    type:Date

},
deleted: {
     type: Boolean,
      default: false 
    },
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
}

})

export const User = mongoose.model('User',userSchema);
export const Task = mongoose.model('Task',taskSchema);


