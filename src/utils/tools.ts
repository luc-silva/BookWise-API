import { sign } from "jsonwebtoken";

export function generateToken(id: string):string {
    return sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
}
