import { Injectable } from "@nestjs/common";
import { PrismaService } from "../utils/PrismaService";

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async createAccount(data: UserAccount) {
    this.prismaService.userAccount.create({ data });
  }

  async getById(id: number) {
    return this.prismaService.userAccount.findUnique({ where: { id } });
  }
}
