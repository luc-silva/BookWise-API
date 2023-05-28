import { Request, Response } from "express";

export const handleError = (
    err: any,
    request: Request,
    response: Response
) => {
    response.status(500).json({ message: `Houve um erro interno: ${err}` });
};
