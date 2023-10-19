import { decode, sign } from "jsonwebtoken";
import { AuthToken } from "./AuthToken";

export class JWTAuthToken implements AuthToken {
  read(item: any): string {
    return decode(item) as string;
  }

  generateToken(str: any): string {
    return sign({ str }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  }
}
