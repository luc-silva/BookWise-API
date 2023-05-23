import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import BookValidator from "../validators/BookValidator";
import UserRepository from "../repositories/UserRepository";
import BookRepository from "../repositories/BookRepository";

/**
 * POST - Create book with given data.
 * @param request - HTTP request object containing the book data.
 * @param response - HTTP response object containing the conclusion of the query.
 */
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

/**
 * GET - Get book details with given object id.
 * @param request - HTTP request object containing the book id.
 * @param response - HTTP response object containing the book details.
 */
export const getBookDetails = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body || !request.user || !request.params) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }
        let { id } = request.params;

        let user = await UserRepository.findUserById(request.user);
        if (!user) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Usuário não encontrado."
            );
            throw new Error("Usuário não encontrado.")
        }

        let bookDetails = await BookRepository.getBookDetails(id);
        if(!bookDetails){
            ResponseHandler.handleResponse(
                response,
                404,
                "Livro não encontrado."
            );
            throw new Error("Livro não encontrado.")
        }

        if (bookDetails.user !== user.id) {
            ResponseHandler.handleResponse(response, 401, "Não Autorizado.");
            throw new Error("Não Autorizado.");
        }

        response.status(200).json(bookDetails);
    }
);
