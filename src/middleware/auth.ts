import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import jwt, { decode } from "jsonwebtoken";
import UserRepository from "../repositories/UserRepository";

interface Decoded {
    id: string;
}

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

        let token = request.headers.authorization.split(" ")[1];
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            ResponseHandler.handleResponse(
                response,
                401,
                "Não Autorizado. Sem Token."
            );
            throw new Error("Não Autorizado. Sem Token.");
        }

        let decodedUserId = typeof decoded === "string" ? decoded : decoded.id;
        let user = await UserRepository.findUserById(decodedUserId);
        if (!user) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Autenticação Mal Sucedida. Usuário Não Encontrado"
            );
            throw new Error(
                "Autenticação Mal Sucedida. Usuário Não Encontrado"
            );
        }

        request.user = user.id;

        next();
    }
);
