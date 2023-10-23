import { Module } from "@nestjs/common";  
import { TopicController } from "./Topic.controller";
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [TopicController], 
  providers: [PrismaService],

})
export class TopicModule {}
