import { Router } from "express";
import UserController from "../controllers/User.js";


const UserRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User registration and login and logout
 */

/**
 * @swagger
 * /signUp:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - userName
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User created successfully!
 *       400:
 *         description: Couldn't create user
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               error: Couldn't create user!
 */

UserRouter.post("/signup", UserController.signUp);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate and log in a user using their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               token: "jwt_token_here"
 *       401:
 *         description: Authentication failed
 *         content:
 *           application/json:
 *             example:
 *               error: Authentication failed
 *       500:
 *         description: Login failed
 *         content:
 *           application/json:
 *             example:
 *               error: Login failed
 */
UserRouter.post("/login", UserController.login);
/**
 * @swagger
 * /logout:
 *   get:
 *     summary: User logout
 *     description: Log out the currently authenticated user.
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Logged out
 *       500:
 *         description: Something went wrong
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Something went wrong
 */

UserRouter.get("/logout", UserController.logout);




export default UserRouter