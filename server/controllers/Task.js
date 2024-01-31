import Task from "../models/Schema.js";
import  express  from 'express';



// FUNCTION TO CREATE TASK

const PostTask = async (req,res) => {
    const {Title , priority , status , description , actions , deadline, deleted , user} = req.body

    try {
        new Task.create({
            Title , priority , status , description , actions , deadline , deleted , user 
        })
        res.status(201).json({success: true, message : "Task Created succesfully"})
       
    } catch (error) {
        res.status(500).json({success: false, error : "Internal Server Error for  Creating task "})
    }
}


//FUNCTION TO GET TASKS
const GetTask=async(req,res)=>{

    try {
        const task = await Task.find()
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
        const taskId= await Task.findById()

        if (taskId) {
          return  res.status(200).json({success:true,message:`Successfully fetched task with the id ${taskId}`});
            
        }
        
    } catch (error) {
        res.status(500).json({success:false,error:"Internal Server Error for fetched TaskId"})
        
    }
}




//Function TO UPDATE TASK 
const UpdateTask =async(req,res)=>{
    try {
        const taskId= req.query.id;
        const updatedTask= await Task.finByIdAndUpdate(taskId,req.body,{new :true})
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
        const taskId= req.query.id;
        const updatedTask= await Task.finByIdAndDelete(taskId,{delete: true},{new :true})
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
            Task.status = "Completed"
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
        res.status(400).json({
            success : false,
            error: "Server Error for switching to Done." 
           });
    }
}
const TaskController = {PostTask, GetTask, GetTaskById, UpdateTask, SwitchToDone, DeleteTask}
export default TaskController;