import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { bookRouter } from "./routes/book.routes";
import { userRouter } from "./routes/user.routes";
import { handleError } from "./middleware/handleError";
import { connectDb } from "./utils/connectDatabase";

export const app = express();
dotenv.config();


connectDb()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/book", bookRouter);
app.use("/api/v1/user", userRouter);
app.use(handleError)