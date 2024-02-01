import mongoose from "mongoose";
import validator from 'validator';
const { isEmail} = validator;


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please provide your username"]
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
  
    password: {
      type: String,
      required: [true, 'please enter a valid email'],
      minlength: [8, 'At least enter 6 character'],
    },

   
  }
  
  )

const taskSchema = new mongoose.Schema({
    Title:{
      type:String,
      required:[true,"Please provide a title for the task"],
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
actions:[{
    type:String
}],
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


