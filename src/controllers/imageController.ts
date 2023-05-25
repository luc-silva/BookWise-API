import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ResponseHandler from "../utils/ResponseHandler";
import ImageRepository from "../repositories/ImageRepository";
import UserRepository from "../repositories/UserRepository";

export const updateImage = asyncHandler(
    async (request: Request, response: Response) => {
        if (!request.user || !request.file || !request.params) {
            ResponseHandler.handleResponse(response, 400, "Dados Inválidos.");
            throw new Error("Dados Inválidos.");
        }
        let { id } = request.params;
        let { buffer } = request.file

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

        console.log(buffer)

        //await ImageRepository.updateImage(id, buffer)

        response.status(200).json({ message: "Feito." });
    }
);
