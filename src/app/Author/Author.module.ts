import { Module } from "@nestjs/common";
import { AuthorController } from "./Author.controller"; 
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [AuthorController],
  providers: [PrismaService], 
})
export class AuthorModule {}
