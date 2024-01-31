import {Router} from "express";
import {GetTask,GetTaskById,UpdateTask } from "../controllers/Task"


const router = Router();
router.get('api/tasks', GetTask)


router.get('api/tasks/:id', GetTaskById)


router.put('api/tasks/:id', UpdateTask)