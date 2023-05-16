import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import BookValidator from "../validators/BookValidator";
import UserRepository from "../repositories/UserRepository";

export const createBook = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body || !request.user) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }

        BookValidator.validateCreate(request.body);

        let user = await UserRepository.findUserById(request.user)
        if(!user){
            ResponseHandler.handleResponse(response, 404, "Usuário não Encontrado.")
            throw new Error("Usuário não Encontrado")
        }


        response.status(200).json(request.user);
    }
);
