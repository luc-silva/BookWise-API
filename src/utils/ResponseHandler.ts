import { Response } from "express";

class ResponseHandler {
  public handleResponse(res: Response, status: number, message: string) {
    res.status(status).json({ message });
  }
}

export default new ResponseHandler();
