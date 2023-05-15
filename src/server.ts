import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { bookRouter } from "./routes/book.routes";
import { authorRouter } from "./routes/author.routes";
import { userRouter } from "./routes/user.routes";
import { tagRouter } from "./routes/tag.routes";
import { collectionRouter } from "./routes/collection.routes";
import { handleError } from "./middleware/handleError";

const app = express();
dotenv.config();


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", () => {
    console.log("Conexão mal sucedida.")
})
mongoose.connection.on("connected", () => {
    console.log("Banco de dados MongoDB conectado.")
})

console.log(`API iniciada na porta: ${process.env.API_PORT}`);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(process.env.API_PORT);

app.use("/api/v1/book", bookRouter);
app.use("/api/v1/author", authorRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tag", tagRouter);
app.use("/api/v1/collection", collectionRouter);
app.use(handleError)