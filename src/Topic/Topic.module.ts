import { Module } from "@nestjs/common"; 
import { PrismaService } from "../utils/PrismaService";   
import { TopicController } from "./Topic.controller";

@Module({
  controllers: [TopicController], 
  providers: [PrismaService],

})
export class TopicModule {}
