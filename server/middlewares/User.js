import express from "express";
import jwt from "jsonwebtoken"
import {config} from "dotenv"


config()

const verifyToken = (req,res,next) => {
   const token = req.cookies.jwt;
   if (!token) return res.status(401).json({ message: 'No token provided.'})
   try {
      const decode =jwt.verify(token,process.env.SECRET_KEY )
      req.token = decode
      next();
   } catch (error) {
    
    res.status(401).json({error: 'invalid token'})
   }
} 

export default verifyToken



