import { Injectable } from "@nestjs/common";
import { PrismaService } from "../utils/PrismaService";

@Injectable()
export class UserRepository {
    constructor (prismaService:PrismaService){}
    
}