import { model } from "mongoose";
import {Task} from "../models/Schema";
import  express  from 'express';




//FUNCTION TO GET TASKs
const GetTask=async(req,res)=>{
    try {
        const task = await Task.find()
        if (task) {
          return  res.status(200).json({success:true,message:"Successfully fetched tasks",task})
            
        }
        
    } catch (error) {
        res.status(500).json({success:false,error:"couldn't fetch data "})
        
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
        res.status(500).json({success:false,error:"couldn't fetch data "})
        
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
        res.status(500).json({success :false ,error: "Task is not updated" });

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

module.exports={UpdateTask,GetTask,GetTaskById, SwitchToDone};