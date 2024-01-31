import express from "express";
import {connect} from "mongoose";
import {config} from "dotenv";
import router from "./routes/Task.js"


config()

const app =  express();
app.use(express.json());
app.use("/api",router)
const PORT = process.env.PORT || 3000

connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongdb connected successfully")
})
.catch ((error) => {
    console.log("mongdb not connected ", error)
})      


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})