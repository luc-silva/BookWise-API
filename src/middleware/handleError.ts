import { Request, Response } from "express";

export const handleError = async (
    err: any,
    request: Request,
    response: Response
) => {
    console.error(`Erro: ${err}`);
    response.status(500).json({ message: `Houve um erro interno: ${err}` });
};
