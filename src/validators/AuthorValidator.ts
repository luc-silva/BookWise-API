import { Response } from "express";
import { AuthorData } from "../../global";
import ResponseHandler from "../utils/ResponseHandler";

class AuthorValidator {
    public validate(authorData: AuthorData, response: Response) {
        try {
            this.validadeAuthorName(authorData.name);
            this.validateDescription(authorData.description);
            this.validateGenres(authorData.genres);
        } catch (err: any) {
            ResponseHandler.handleResponse(response, 400, err.message);
        }
    }

    private validadeAuthorName({
        first,
        last,
    }: {
        first: string;
        last?: string;
    }) {
        if (!first || first.length > 25) {
            throw new Error("Campo nome inválido.");
        }
        if (last && last.length > 25) {
            throw new Error("Campo sobrenome inválido.");
        }
    }

    private validateGenres(genres: string[]) {
        if (genres.length < 1) {
            throw new Error("Campo gênero inválido.");
        }
        genres.forEach((genre) => {
            if (genre.length > 15) {
                throw new Error(`Valor ${genre} é inválido.`);
            }
        });
    }

    private validateDescription(description: string) {
        if (description && description.length > 250) {
            throw new Error("Campo descrição inválido.");
        }
    }
}

export default new AuthorValidator();
