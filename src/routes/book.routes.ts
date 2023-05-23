import { Router } from "express";
import { protectedRoute } from "../middleware/auth";
import { createBook, getBookDetails } from "../controllers/bookController";

export const bookRouter = Router()

bookRouter.post("/", protectedRoute, createBook)
bookRouter.get("/:id", protectedRoute, getBookDetails)