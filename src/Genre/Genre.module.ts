import { Module } from "@nestjs/common"; 
import { PrismaService } from "../utils/PrismaService"; 
import { GenreController } from "./Genre.controller";

@Module({
  controllers: [GenreController], 
  providers: [PrismaService],

})
export class GenreModule {}
