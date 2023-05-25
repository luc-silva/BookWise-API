import { Router } from "express";
import { protectedRoute } from "../middleware/auth";
import { getImage, updateImage } from "../controllers/imageController";

export const imageRouter = Router()

imageRouter.get("/:id", protectedRoute, getImage)
imageRouter.patch("/:id", protectedRoute, updateImage)