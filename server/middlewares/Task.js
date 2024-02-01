import express from "express";
import {Task}  from "../models/Schema.js";



const ExisteTask = async( req  , res , next ) => {
    try {
            const { user } = req.body
            const CheckTaskByUser = await Task.findOne({ user })
            
            
            if (CheckTaskByUser) {
               return res.status(401).json({
                    success : false,
                    message : "Task already Existe"
                })
            }
            next()
    } catch (error) {
        res.status(500).json({ error : "Task not registered"})
    }
    
    


}

export default ExisteTask