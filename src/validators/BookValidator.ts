import { Response } from "express";
import { BookData } from "../../global";
import ResponseHandler from "../utils/ResponseHandler";
import { isValidObjectId } from "mongoose";

class BookValidator {
    validateCreate(response: Response, data: BookData) {
        try {
            this.validateNameField(data.title);
            this.validateEditionField(data.edition);
            this.validatePagesField(data.pages);
            this.validateReleasedDateField(data.released_date);
            this.validateVolumeField(data.volume);
            this.validateFranchiseField(data.franchise);
            this.validateBookAuthor(data.book_author)
        } catch (err: any) {
            ResponseHandler.handleResponse(response, 400, err.message);
        }
    }

    private validateNameField(title: string) {
        if (!title || title.length > 30) {
            throw new Error("Campo nome inválido.");
        }
    }

    private validateEditionField(edition: string) {
        if (!edition || edition.length > 15) {
            throw new Error("Campo edição inválido.");
        }
    }
    private validatePagesField(pages: number) {
        if (!pages || pages <= 0) {
            throw new Error("Campo pagínas inválido.");
        }
    }
    private validateReleasedDateField(date: Date) {
        if (!date) {
            throw new Error("Campo data de lançamento inválido.");
        }
    }
    private validateBookAuthor(author:string){
        if(!isValidObjectId(author)){
            if(!author || author.length > 30){
                throw new Error("Campo autor inválido.");
            }
        }
    }
    private validateVolumeField(volume?: string) {
        if (volume && volume.length > 10) {
            throw new Error("Campo volume inválido.");
        }
    }
    private validateFranchiseField(franchise?: string) {
        if (franchise && franchise.length > 30) {
            throw new Error("Campo franquia inválido.");
        }
    }
}

export default new BookValidator();
