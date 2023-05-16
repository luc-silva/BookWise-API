import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import ResponseHandler from "../utils/ResponseHandler";
import UserValidator from "../validators/UserValidator";
import UserRepository from "../repositories/UserRepository";
import { generateToken } from "../utils/tools";

export const createUser = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados inválidos.");
        }

        UserValidator.validateUserData(request.body, response);

        let emailAlreadyUsed = await UserRepository.findUserByEmail(request.body.email)
        if(emailAlreadyUsed){
            ResponseHandler.handleResponse(response, 400, "Esse email já está sendo usado.")
            throw new Error("Esse email já está sendo usado.")
        }

        await UserRepository.createItem(request.body);
        response.status(200).json({ message: "Criado." });
    }
);

export const loginUser = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados inválidos.");
        }

        let { email, password } = request.body;
        let user = await UserRepository.findUserByEmail(email);
        if (!user) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Usuário não encontrado."
            );
            throw new Error("Usuário não encontrado.");
        }

        if (user.password !== password) {
            ResponseHandler.handleResponse(response, 401, "Senha Inválida.");
            throw new Error("Senha Inválida.");
        }

        response.status(200).json({ token: generateToken(user.id) });
    }
);
