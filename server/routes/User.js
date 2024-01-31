import { Router } from "express";
import UserController from "../controllers/User.js";

const UserRouter = Router();

UserRouter.post("/signup", UserController.signUp);

UserRouter.post("/login", UserController.login);

UserRouter.get("/logout", UserController.logout);




export default UserRouter