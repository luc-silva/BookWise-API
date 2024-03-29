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
      throw new Error("Field name invalid.");
    }
    if (last && last.length > 25) {
      throw new Error("Field name Invalid.");
    }
  }

  private validateGenres(genres: string[]) {
    if (genres.length < 1) {
      throw new Error("Field Invalid.");
    }
    genres.forEach((genre) => {
      if (genre.length > 15) {
        throw new Error(`Field tags Invalid.`);
      }
    });
  }

  private validateDescription(description: string) {
    if (description && description.length > 250) {
      throw new Error("Field description Invalid.");
    }
  }
}

export default new AuthorValidator();
