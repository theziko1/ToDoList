import { Router } from "express";
import TaskController from "../controllers/Task.js";
import ExisteTask from "../middlewares/Task.js"

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API operations related to tasks
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Successfully fetched tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 task:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Task'
 *       500:
 *         description: Internal Server Error
 */

router.get("/tasks", TaskController.GetTask);
/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched task by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Internal Server Error for fetching task by ID
 */
router.get("/tasks/:id", TaskController.GetTaskById);
/**
 * @swagger
 * /tasks:
 *   put:
 *     summary: Update a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: ID of the task to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error for updating task
 */
router.put("/tasks/:id", TaskController.UpdateTask);
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Title:
 *                 type: string
 *               priority:
 *                 type: string
 *               status:
 *                 type: string
 *               description:
 *                 type: string
 *               actions:
 *                 type: string
 *               deadline:
 *                 type: string
 *               user:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: User not found
 *       500:
 *         description: Internal Server Error for creating task
 */
router.post("/tasks",  ExisteTask , TaskController.PostTask);
/**
 * @swagger
 * /tasks/switch-to-done:
 *   put:
 *     summary: Switch task status to "Done"
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Status switched to Done
 *       400:
 *         description: Invalid status for switching to Done
 *       500:
 *         description: Server Error for switching to Done
 */
router.put("/switch", TaskController.SwitchToDone);
/**
 * @swagger
 * /tasks:
 *   delete:
 *     summary: Soft delete a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: ID of the task to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error for deleting task
 */
router.delete("/tasks/:id", TaskController.DeleteTask);


export default router
