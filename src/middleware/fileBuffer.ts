import { NextFunction, Request, response, Response } from "express";
import asyncHandler from "express-async-handler";
import multer from "multer";
import { extname } from "path";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 4e6, //4 MB
  },
  fileFilter: (req, file, callback) => {
    const allowed = /jpg|png|jpeg/;
    let ext = allowed.test(extname(file.originalname));
    if (!ext) {
      callback(new Error("Invalid Image."));
    } else {
      return callback(null, true);
    }
  },
}).single("imageField");

export const imageUploader = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    upload(request, response, (err) => {
      if (err) {
        response.status(400).json({ message: err.message });
      } else {
        next();
      }
    });
  },
);
