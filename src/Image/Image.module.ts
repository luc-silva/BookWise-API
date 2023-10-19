import { Module } from "@nestjs/common";
import { ImageRepository } from "./Image.repository";
import { ImageController } from "./Image.controller";
import { PrismaService } from "../utils/PrismaService";

@Module({ 
    controllers:[ImageController],
    providers: [PrismaService],

})
export class ImageModule{}