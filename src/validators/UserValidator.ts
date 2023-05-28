import { UserData } from "../../global";
import { Response } from "express";

import ResponseHandler from "../utils/ResponseHandler";

class UserValidator {
    validateUserData({ email, name, username }: UserData, resObj: Response) {
        try {
            this.validateEmail(email);
            this.validateName(name);
            this.validateUsername(username);
        } catch (err: any) {
            ResponseHandler.handleResponse(resObj, 400, err.message);
        }
    }

    validateEmail(email: string) {
        if (!email || email.length > 25) {
            throw new Error("Field email invalid.");
        }
    }
    validateName({ first, last }: { last?: string; first: string }) {
        if (!first || first.length > 15) {
            throw new Error("Field name invalid.");
        }
        if (last && last.length > 15) {
            throw new Error("Field name invalid.");
        }
    }
    validateUsername(username: string) {
        if (!username || username.length > 15) {
            throw new Error("Field username invalid.");
        }
    }
}

export default new UserValidator();
