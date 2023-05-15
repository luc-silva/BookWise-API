import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import ResponseHandler from "./ResponseHandler";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/UserRepository";

export const protectedRoute = expressAsyncHandler(
    async (request: Request, response: Response, next: NextFunction) => {
        if (
            !request.headers.authorization ||
            !request.headers.authorization.startsWith("Bearer")
        ) {
            ResponseHandler.handleResponse(
                response,
                401,
                "Não Autorizado. Sem Token."
            );
            throw new Error("Não Autorizado. Sem Token.");
        }

        let token = request.headers.authorization.split(" ")[1]
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            ResponseHandler.handleResponse(response, 401, "Não Autorizado. Sem Token.")
            throw new Error("Não Autorizado. Sem Token.")
        }

        let user = UserRepository.getItemDetails

        next();
    }
);
