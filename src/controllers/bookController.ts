import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import BookValidator from "../validators/BookValidator";
import UserRepository from "../repositories/UserRepository";
import BookRepository from "../repositories/BookRepository";

export const createBook = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body || !request.user) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }

        BookValidator.validateCreate(response, request.body);

        let user = await UserRepository.findUserById(request.user);
        if (!user) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Usuário não Encontrado."
            );
            throw new Error("Usuário não Encontrado");
        }

        let data = { ...request.body, user: user.id };
        await BookRepository.createBook(data);

        response.status(200).json({ message: "Criado." });
    }
);
