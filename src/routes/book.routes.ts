import { Router } from "express";
import { protectedRoute } from "../middleware/auth";
import { createBook } from "../controllers/bookController";

export const bookRouter = Router()

bookRouter.post("/", protectedRoute, createBook)