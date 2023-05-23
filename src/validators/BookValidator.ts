import { Response } from "express";
import { BookData } from "../../global";
import ResponseHandler from "../utils/ResponseHandler";

class BookValidator {
    validateCreate(response: Response, data: BookData) {
        try {
            this.validateNameField(data.title);
            this.validateEditionField(data.edition);
            this.validatePagesField(data.pages);
            this.validateReleasedDateField(data.released_date);
            this.validateVolumeField(data.volume);
            this.validateFranchiseField(data.franchise);
        } catch (err: any) {
            ResponseHandler.handleResponse(response, 400, err.message);
        }
    }

    public validateNameField(title: string) {
        if (!title || title.length > 30) {
            throw new Error("Campo nome inválido.");
        }
    }

    public validateEditionField(edition: string) {
        if (!edition || edition.length > 15) {
            throw new Error("Campo edição inválido.");
        }
    }
    public validatePagesField(pages: number) {
        if (!pages || pages <= 0) {
            throw new Error("Campo pagínas inválido.");
        }
    }
    public validateReleasedDateField(date: Date) {
        if (!date) {
            throw new Error("Campo data de lançamento inválido.");
        }
    }
    public validateVolumeField(volume?: string) {
        if (volume && volume.length > 10) {
            throw new Error("Campo volume inválido.");
        }
    }
    public validateFranchiseField(franchise?: string) {
        if (franchise && franchise.length > 30) {
            throw new Error("Campo franquia inválido.");
        }
    }
}

export default new BookValidator();
