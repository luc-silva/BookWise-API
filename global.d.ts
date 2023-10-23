import { Request } from "express"; 

declare global {
    namespace Express {
        interface Request {
            user: string;
        }
    }
    namespace NodeJS {
        interface ProcessEnv {
            JWT_SECRET: string;
            API_PORT: string; 
        }
    }
}
declare module "jsonwebtoken" {
    interface JwtPayload {
        id: number;
    }
}
