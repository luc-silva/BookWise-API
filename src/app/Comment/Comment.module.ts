import { Module } from "@nestjs/common";  
import { CommentController } from "./Comment.controller";
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [CommentController], 
  providers: [PrismaService],

})
export class CommentModule {}
