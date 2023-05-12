import express from "express";
import cors from "cors";

import { bookRouter } from "./routes/book.routes";
import { authorRouter } from "./routes/author.routes";
import { userRouter } from "./routes/user.routes";
import { tagRouter } from "./routes/tag.routes";
import { collectionRouter } from "./routes/collection.routes";
import mongoose from "mongoose";

const app = express();

mongoose.connect(
    "mongodb+srv://lucasAdmin:lucas1353@cluster0.oximzo5.mongodb.net/project_bookwise?retryWrites=true&w=majority"
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(6000);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/author", authorRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tag", tagRouter);
app.use("/api/v1/collection", collectionRouter);
