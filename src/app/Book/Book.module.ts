import { Module } from "@nestjs/common";
import { BookController } from "./Book.controller"; 
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [BookController], 
  providers: [PrismaService],

})
export class BookModule {}
