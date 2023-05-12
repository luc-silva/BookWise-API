import { Router } from "express";
import { createUser } from "../controllers/userController";

export const userRouter = Router()

userRouter.post("/", createUser)
