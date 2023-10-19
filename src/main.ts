import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { handleError } from "./middleware/handleError";
import { NestFactory } from "@nestjs/core";
import { ServerModule } from "./server.module";

async function BookwiseApi() {
  const app = await NestFactory.create(ServerModule);

  app.use(dotenv.config());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
 
  app.use(handleError);

  await app.listen(process.env.API_PORT);
}

BookwiseApi()
