import { Router } from "express";
import { protectedRoute } from "../middleware/auth";
import { createBook, deleteBook, getBookDetails, updateBook } from "../controllers/bookController";

export const bookRouter = Router()

bookRouter.post("/", protectedRoute, createBook)
bookRouter.get("/:id", protectedRoute, getBookDetails)
bookRouter.delete("/:id", protectedRoute, deleteBook)
bookRouter.patch("/:id", protectedRoute, updateBook)