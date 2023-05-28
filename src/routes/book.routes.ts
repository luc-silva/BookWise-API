import { Router } from "express";
import { protectedRoute } from "../middleware/auth";
import { createBook, deleteBook, getBookDetails, updateBook } from "../controllers/bookController";
import { imageUploader } from "../middleware/fileBuffer";

export const bookRouter = Router()

bookRouter.post("/", protectedRoute, imageUploader, createBook)
bookRouter.get("/:id", protectedRoute, getBookDetails)
bookRouter.delete("/:id", protectedRoute, deleteBook)
bookRouter.patch("/:id", protectedRoute, updateBook)