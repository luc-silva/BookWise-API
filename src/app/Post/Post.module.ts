import { Module } from "@nestjs/common";  
import { PostController } from "./Post.controller";
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [PostController], 
  providers: [PrismaService],

})
export class PostModule {}
