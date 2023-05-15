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
            MONGODB_URI:string
        }
    }
}

interface UserData {
    name: {
        first: string;
        last?: string;
    };
    password: string;
    email: string;
    username: string;
}
interface BookData {
    name: string;
    volume: string;
    pages: number;
    edition: string;
    released_date: Date;
    volume?: string;
    franchise?: string;
}
