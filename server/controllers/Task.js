import {Task} from "../models/Schema.js";
import {User} from "../models/Schema.js";
import  express  from 'express';



// FUNCTION TO CREATE TASK

const PostTask = async (req,res) => {
    
    try {
        const checkUser = await User.findById({ _id : req.body.user})
        if (checkUser === null) {
            return res.status(400).json({
                success : true,
                message : 'user not found', 
            })
        }
        const {Title , priority , status , description , deadline , user} = req.body
        await Task.create({
            Title, 
            priority, 
            status,
            description, 
            deadline,  
            user : checkUser._id
        }).
        res.status(201).json({
            success: true, 
            message : "Task Created succesfully"
        })
       
    } catch (error) {
        res.status(500).json({
            success: false, 
            message : "Internal Server Error for  Creating task ",
            error : error.message
        })
    }
}


//FUNCTION TO GET TASKS
const GetTask=async(req,res)=>{

    try {
        const task = await Task.find().populate('user')
        if (task) {
          return  res.status(200).json({success:true ,message:"Successfully fetched tasks",task})
            
        }
        
    } catch (error) {
        res.status(500).json({success:false ,error:"Internal Server Error"})
        
    }
}


//FUNCTION TO GET TASK BY ID
const GetTaskById=async(req,res)=>{
    try {
        const taskId= await Task.findById(req.params.id).populate('user')

        if (taskId) {
          return  res.status(200).json({success:true,
            message:"Successfully fetched task with the id ",
          data : taskId
        });
            
        }
        
    } catch (error) {
        res.status(500).json({success:false,error:"Internal Server Error for fetched TaskId"})
        
    }
}




//Function TO UPDATE TASK 
const UpdateTask =async(req,res)=>{
    try {
        const taskId= req.params.id;
        const updatedTask= await Task.findByIdAndUpdate(taskId,req.body,{new :true})
        if (!updatedTask) {
            return res.status(404).json({success :false ,message: `Cannot find the task with the id ${taskId}`});
            
        }
        res.status(200).json({success :true ,message: `Task is updated successfully`});

        
    } catch (error) {
        res.status(500).json({success :false ,error: "Internal Server Error for Updated task" });

            }
}

// FUCTION TO Sotf Delete Task 

const DeleteTask = async(req,res) => {
    try {
        const taskId= req.params.id;
        const updatedTask= await Task.findByIdAndDelete(taskId,{delete: true},{new :true})
        if (!updatedTask) {
            return res.status(404).json({success :false ,message: "Task not found"});
            
        }
        res.status(200).json({success :true ,message: "Task is deleted successfully",updatedTask});

        
    } catch (error) {
        res.status(500).json({success :false ,error: "Internal Server Error for deleting server" });

         }
}

//Function Switch "Status to done "

const SwitchToDone = async(req,res) => {
    try {
        if (Task.status === "Todo" || Task.status === "In Progress") {
            Task.status == "Completed"
            return res.status(200).json({
                success :true ,
                message : "Status Switched to Done"
            })
        }
        else {
           return  res.status(400).json({
                 success : false,
                 message: "Invalid Status for switching to done." 
                });
        }
    } catch (error) {
        res.status(500).json({
            success : false,
            error: "Server Error for switching to Done." 
           });
    }
}
const TaskController = {PostTask, GetTask, GetTaskById, UpdateTask, SwitchToDone, DeleteTask}
export default TaskController;