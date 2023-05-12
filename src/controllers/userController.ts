import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import UserValidator from "../validators/UserValidator";
import UserRepository from "../repositories/UserRepository";

export const createUser = asyncHandler(
    (request: Request, response: Response) => {
        if (!request.body) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos");
            throw new Error("Dados inválidos.");
        }

        UserValidator.validateUserData(request.body, response);

        UserRepository.createItem(request.body)

        response.status(200).json({message:"Criado."});
    }
);
