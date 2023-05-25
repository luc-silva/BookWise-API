import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import ImageRepository from "../repositories/ImageRepository";
import UserRepository from "../repositories/UserRepository";

/**
 * PATCH - Update a image with given id and data.
 * @param request - HTTP request object containing the image id and data object.
 * @param response - HTTP response object containing the conclusion message.
 */
export const updateImage = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.user || !request.file || !request.params) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }
        let { id } = request.params;
        let { buffer } = request.file;

        let user = await UserRepository.findUserById(request.user);
        if (!user) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Imagem não encontrado."
            );
            throw new Error("Usuário não encontrado.");
        }

        let image = await ImageRepository.getImageById(id);
        if (!image) {
            ResponseHandler.handleResponse(
                response,
                404,
                "Imagem não encontrada."
            );
            throw new Error("Imagem não encontrada.");
        }

        if (image.user.toString() !== user.id) {
            ResponseHandler.handleResponse(response, 401, "Não Autorizado.");
            throw new Error("Não Autorizado.");
        }

        await ImageRepository.updateImage(id, buffer);

        response.status(200).json({ message: "Feito." });
    }
);

/**
 * GET - Get a image instance with given id.
 * @param request - HTTP request object containing the book id.
 * @param response - HTTP response object containing the image buffer.
 */
export const getImage = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.user || !request.params) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }
        let { id } = request.params;

        let image = await ImageRepository.getImageById(id);
        if(!image){
            ResponseHandler.handleResponse(response, 404, "Imagem não encontrada.");
            throw new Error("Imagem não encontrada.");
        }

        response.status(200).json(image);
    }
);
