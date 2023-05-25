import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import BookValidator from "../validators/BookValidator";
import UserRepository from "../repositories/UserRepository";
import BookRepository from "../repositories/BookRepository";
import ImageRepository from "../repositories/ImageRepository";

/**
 * POST - Create book with given data.
 * @param request - HTTP request object containing the book data.
 * @param response - HTTP response object containing the conclusion of the query.
 */
export const createBook = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.body || !request.user || !request.file) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }

        let { bookDetails } = request.body;
        let parsedBookDetails = JSON.parse(bookDetails);
        console.log(parsedBookDetails);

        BookValidator.validate(response, parsedBookDetails);

        let user = await UserRepository.findUserById(request.user);
        if (!user) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Usuário não Encontrado."
            );
            throw new Error("Usuário não Encontrado");
        }

        let data = { ...parsedBookDetails, user: user.id };
        let book = await BookRepository.createBook(data);

        let { buffer } = request.file;
        await ImageRepository.createImage({
            user: user.id,
            book,
            buffer,
        });

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
            throw new Error("Usuário não encontrado.");
        }

        let bookDetails = await BookRepository.getBookDetails(id);
        if (!bookDetails) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Livro não encontrado."
            );
            throw new Error("Livro não encontrado.");
        }

        if (bookDetails.user.toString() !== user.id) {
            ResponseHandler.handleResponse(response, 401, "Não Autorizado.");
            throw new Error("Não Autorizado.");
        }

        response.status(200).json(bookDetails);
    }
);

/**
 * GET - Get books ids with given user object id.
 * @param request - HTTP request object containing the user id.
 * @param response - HTTP response object containing the book details.
 */
export const getUserBooks = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.user) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }

        let user = await UserRepository.findUserById(request.user);
        if (!user) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Usuário não encontrado."
            );
            throw new Error("Usuário não encontrado.");
        }

        let books = await BookRepository.getBooksByUserId(user.id);
        response.status(200).json(books);
    }
);

/**
 * DELETE - Delete a book instance with given id.
 * @param request - HTTP request object containing the book id.
 * @param response - HTTP response object containing the conclusion message.
 */
export const deleteBook = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.params || !request.user) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }
        let { id } = request.params;
        let book = await BookRepository.getBookDetails(id);
        if (!book) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Livro não Encontrado."
            );
            throw new Error("Livro não Encontrado");
        }

        if (book.user.toString() !== request.user) {
            ResponseHandler.handleResponse(response, 401, "Não Autorizado.");
            throw new Error("Não Autorizado.");
        }

        await BookRepository.deleteBook(id);

        response.status(200).json({ message: "Feito." });
    }
);

/**
 * PATCH - Update a book instance with given id and data.
 * @param request - HTTP request object containing the user id.
 * @param response - HTTP response object containing the book details.
 */
export const updateBook = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.params || !request.user || !request.body) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }

        let { id } = request.params;
        let book = await BookRepository.getBookDetails(id);
        if (!book) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Livro não Encontrado."
            );
            throw new Error("Livro não Encontrado");
        }

        if (book.user.toString() !== request.user) {
            ResponseHandler.handleResponse(response, 401, "Não Autorizado.");
            throw new Error("Não Autorizado.");
        }

        BookValidator.validate(response, request.body);
        await BookRepository.updateBook(id, request.body);

        response.status(200).json({ message: "Feito." });
    }
);
