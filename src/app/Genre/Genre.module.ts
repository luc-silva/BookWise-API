import { Module } from "@nestjs/common";  
import { GenreController } from "./Genre.controller";
import { PrismaService } from "../../utils/PrismaService";

@Module({
  controllers: [GenreController], 
  providers: [PrismaService],

})
export class GenreModule {}
