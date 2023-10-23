import { Module } from "@nestjs/common";
import { UserController } from "./User.controller"; 
import { PrismaService } from "../../utils/PrismaService";

@Module({
  providers: [PrismaService],
  controllers: [UserController], 

})
export class UserModule {}
