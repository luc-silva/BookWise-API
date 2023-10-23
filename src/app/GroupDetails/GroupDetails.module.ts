import { Module } from "@nestjs/common";  
import { CommentController } from "../Comment/Comment.controller";
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [CommentController], 
  providers: [PrismaService],

})
export class GroupDetailsModule {}
