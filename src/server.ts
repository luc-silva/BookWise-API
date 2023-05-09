import express from "express";
import cors from "cors";

import { bookRouter } from "./routes/book.routes";
import { authorRouter } from "./routes/author.routes";
import { userRouter } from "./routes/user.routes";
import { tagRouter } from "./routes/tag.routes";
import { collectionRouter } from "./routes/collection.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(4000);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/author", authorRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tag", tagRouter);
app.use("/api/v1/collection", collectionRouter);
