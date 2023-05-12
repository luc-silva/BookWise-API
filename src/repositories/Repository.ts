import { Model, SessionOption, Types } from "mongoose";

export abstract class Repository {
    constructor(private model: Model<any>) {
        this.model = model;
    }

    public validateObjectId(objectId: string) {
        if (!Types.ObjectId.isValid(objectId)) {
            throw new Error("ID de usuário inválido.");
        }
    }

    public async getItemDetails(bookId: string) {
        this.validateObjectId(bookId);
        return await this.model.findById(bookId);
    }

    public async createItem(data:any) {
        await this.model.create(data);
    }

    public async deleteItem(bookId: string, session?: SessionOption) {
        this.validateObjectId(bookId);
        await this.model.findByIdAndDelete(bookId);
    }

    public async updateItem(bookId: string, data:any) {
        this.validateObjectId(bookId);
        await this.model.findByIdAndUpdate(bookId, data);
    }
}
