import { Request } from "express";

interface UserData {
    name: {
        first: string;
        last?: string;
    };
    password: string;
    email: string;
    username: string;
}

interface FetchedBookData extends BookData {
    user: string;
    _id: string;
}
interface BookData {
    book_collection: string;
    name: string;
    volume: string;
    pages: number;
    edition: string;
    released_date: Date;
    volume?: string;
    franchise?: string;
}
interface AuthorData {
    name: {
        first: string;
        last?: string;
    };
    birth_date: string;
    description: string;
    genres: string[];
}

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
            MONGODB_URI: string;
        }
    }
}
declare module "jsonwebtoken" {
    interface JwtPayload {
        id: string;
    }
}
