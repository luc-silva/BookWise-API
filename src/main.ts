import { NestFactory } from "@nestjs/core";
import { ServerModule } from "./app/server.module";
import { NestExpressApplication } from "@nestjs/platform-express";

async function BookwiseApi() {
  const app = await NestFactory.create<NestExpressApplication>(ServerModule);

  // app.use(dotenv.config());
  // app.use(cors());
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));
 
  // //app.use(handleError);

  await app.listen(process.env.API_PORT);
}

BookwiseApi()
