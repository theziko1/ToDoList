import {mongoose} from "mongoose";
import{ isEmail} from 'validator';


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

    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    }]
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
    default:"Medium"
},
status:{
    type:String,
    enum:["Todo", "In Progress", "Completed"],
    default:'Todo',
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
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
}

})

const User = mongoose.model('User',userSchema);


const Task = mongoose.model('Task',taskSchema);
module.exports = {Task,User};