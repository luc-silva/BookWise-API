import { Module } from "@nestjs/common"; 
import { PrismaService } from "../utils/PrismaService";  
import { PostController } from "./Post.controller";

@Module({
  controllers: [PostController], 
  providers: [PrismaService],

})
export class PostModule {}
