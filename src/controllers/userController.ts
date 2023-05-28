import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import ResponseHandler from "../utils/ResponseHandler";
import UserValidator from "../validators/UserValidator";
import UserRepository from "../repositories/UserRepository";
import { generateToken } from "../utils/tools";

/**
 * POST - Create user with given data.
 * @param request - HTTP request object containing the user data.
 * @param response - HTTP response object containing the conclusion of the query.
 * @returns Conclusion message inside a object.
 * @throws Return errors
 */
export const createUser = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body) {
            ResponseHandler.handleResponse(response, 400, "Invalid Data.");
            throw new Error("Invalid Data.");
        }

        UserValidator.validateUserData(request.body, response);
        let emailAlreadyUsed = await UserRepository.findUserByEmail(
            request.body.email
        );
        if (emailAlreadyUsed) {
            ResponseHandler.handleResponse(
                response,
                400,
                "Esse email já está sendo usado."
            );
            throw new Error("Esse email já está sendo usado.");
        }

        await UserRepository.createUser(request.body);
        response.status(200).json({ message: "Criado." });
    }
);

/**
 * POST - Create user with given data.
 * @param request - HTTP request object containing the user data.
 * @param response - HTTP response object containing the conclusion of the query.
 */
export const loginUser = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body) {
            ResponseHandler.handleResponse(response, 400, "Invalid Data.");
            throw new Error("Invalid Data.");
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

        response.status(200).json({ token: generateToken(user.id), id:user.id });
    }
);

/**
 * GET - Get user reading status with given id.
 * @param request - HTTP request object containing the user id.
 * @param response - HTTP response object containing the conclusion of the query.
 */
export const getUserStatus = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.params.id || !request.user) {
            ResponseHandler.handleResponse(response, 400, "Invalid Data.");
            throw new Error("Invalid Data.");
        }

        let { id } = request.params;
        if (id !== request.user) {
            ResponseHandler.handleResponse(response, 401, "Not Authorized.");
            throw new Error("Not Authorized.");
        }

        let status = await UserRepository.getUserStatus(id);

        response.status(200).json(status);
    }
);
