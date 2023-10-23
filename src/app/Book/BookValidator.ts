import { Response } from "express";
import { BookData } from "../../global";
import ResponseHandler from "../utils/ResponseHandler";

class BookValidator {
  validate(response: Response, data: BookData) {
    try {
      this.validateNameField(data.title);
      this.validateEditionField(data.edition);
      this.validatePagesField(data.pages);
      this.validateReleasedDateField(data.released_date);
      this.validateVolumeField(data.volume);
      this.validateFranchiseField(data.franchise);
      this.validateDescription(data.description);
      this.validateStoreUrl(data.store_url);
    } catch (err: any) {
      ResponseHandler.handleResponse(response, 400, err.message);
    }
  }

  private validateNameField(title: string) {
    if (!title || title.length > 30) {
      throw new Error("Field title invalid.");
    }
  }

  private validateStoreUrl(url: string) {
    if (url && url.length > 200) {
      throw new Error("Field store url invalid.");
    }
  }

  private validateDescription(description: string) {
    if (description && description.length > 300) {
      throw new Error("Field description invalid.");
    }
  }

  private validateEditionField(edition: string) {
    if (!edition || edition.length > 15) {
      throw new Error("Field edition invalid.");
    }
  }
  private validatePagesField(pages: number) {
    if (!pages || pages <= 0) {
      throw new Error("Field pages invalid.");
    }
  }
  private validateReleasedDateField(date: Date) {
    if (!date) {
      throw new Error("Field release date invalid.");
    }
  } 
  private validateVolumeField(volume?: string) {
    if (volume && volume.length > 10) {
      throw new Error("Field volume invalid.");
    }
  }
  private validateFranchiseField(franchise?: string) {
    if (franchise && franchise.length > 30) {
      throw new Error("Field franchise invalid.");
    }
  }
}

export default new BookValidator();
