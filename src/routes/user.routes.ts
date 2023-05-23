import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController";
import { getUserBooks } from "../controllers/bookController";
import { protectedRoute } from "../middleware/auth";

export const userRouter = Router()

userRouter.post("/", createUser)
userRouter.post("/login", loginUser)
userRouter.get("/books", protectedRoute, getUserBooks)
