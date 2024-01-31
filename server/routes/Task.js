import { Router } from "express";
import {
  GetTask,
  GetTaskById,
  UpdateTask,
  PostTask,
  SwitchToDone,
  DeleteTask,
} from "../controllers/Task";

const router = Router();
router.get("/tasks", GetTask);

router.get("/tasks/:id", GetTaskById);

router.put("/tasks/:id", UpdateTask);

router.post("/tasks", PostTask);

router.put("/switch", SwitchToDone);

router.delete("/tasks/:id", DeleteTask);


module.exports= router
