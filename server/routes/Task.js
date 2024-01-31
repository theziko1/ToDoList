import { Router } from "express";
import TaskController from "../controllers/Task.js";
import ExisteTask from "../middlewares/Task.js"

const router = Router();

router.get("/tasks", TaskController.GetTask);

router.get("/tasks/:id", TaskController.GetTaskById);

router.put("/tasks/:id", TaskController.UpdateTask);

router.post("/tasks",  ExisteTask , TaskController.PostTask);

router.put("/switch", TaskController.SwitchToDone);

router.delete("/tasks/:id", TaskController.DeleteTask);


export default router
