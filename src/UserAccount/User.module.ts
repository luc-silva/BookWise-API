import { Module } from "@nestjs/common";
import { UserController } from "./User.controller";
import { UserRepository } from "./User.repository";
import { PrismaService } from "../utils/PrismaService";

@Module({
  providers: [PrismaService],
  controllers: [UserController], 

})
export class UserModule {}
