import { Router } from "express";
import { protectedRoute } from "../middleware/auth";
import { updateImage } from "../controllers/imageController";

export const router = Router()

router.patch("/:id", protectedRoute, updateImage)