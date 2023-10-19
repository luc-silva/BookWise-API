import { Module } from "@nestjs/common"; 
import { PrismaService } from "../utils/PrismaService";
import { CommentController } from "./Comment.controller";

@Module({
  controllers: [CommentController], 
  providers: [PrismaService],

})
export class CommentModule {}
