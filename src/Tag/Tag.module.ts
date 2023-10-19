import { Module } from "@nestjs/common"; 
import { PrismaService } from "../utils/PrismaService";  
import { TagController } from "./Tag.controller";

@Module({
  controllers: [TagController], 
  providers: [PrismaService],

})
export class TagModule {}
