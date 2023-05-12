import { Response, response } from "express";
import ResponseHandler from "../utils/ResponseHandler";

class UserValidator {
    validateUserData({ email, name, username }: UserData, resObj: Response) {
        try {
            this.validateEmail(email);
            this.validateName(name);
            this.validateUsername(username);
        } catch (err:any) {
            ResponseHandler.handleResponse(resObj, 400, err.message)
        }
    }

    validateEmail(email: string) {
        if (!email || email.length > 25) {
            throw new Error("Campo email inválido.");
        }
    }
    validateName({ first, last }: { last?: string; first: string }) {
        if ((last && last.length > 15) || !first || first.length > 15) {
            throw new Error("Campo nome inválido.");
        }
    }
    validateUsername(username: string) {
        if (!username || username.length > 15) {
            throw new Error("Campo nome de usuário inválido.");
        }
    }
}

export default new UserValidator();
