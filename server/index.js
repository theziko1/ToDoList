import express from "express";
import {connect} from "mongoose";
import cookieParser from "cookie-parser"
import cors from "cors"
import {config} from "dotenv";
import router from "./routes/Task.js"
import UserRouter from "./routes/User.js"
import swaggerDocs from './docs/swagger.js';
import bodyparser from "body-parser";



config()

const app =  express();
app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser())
app.use("/api",router)
app.use("/user",UserRouter) 

const PORT = process.env.PORT || 3000

connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch ((error) => {
    console.log("mongodb not connected ", error)
})      

swaggerDocs(app, PORT )

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})