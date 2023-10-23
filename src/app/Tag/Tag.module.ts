import { Module } from "@nestjs/common";  
import { TagController } from "./Tag.controller";
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [TagController], 
  providers: [PrismaService],

})
export class TagModule {}
