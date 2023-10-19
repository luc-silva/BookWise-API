import { DataEncrypter } from "./DataEncrypter";
import bcrypt from "bcrypt";

export class BCryptEncrypter implements DataEncrypter {
  async checkIntegrity(data: any, encrypted: any): Promise<boolean> {
    return await bcrypt.compare(data, encrypted).then((bool) => bool);
  }
  async encrypt(data: any) {
    return await bcrypt.hash(data, await this.salt());
  }
  private async salt(): Promise<string> {
    return await bcrypt.genSalt(10);
  }
}
