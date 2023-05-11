import { Model, SessionOption, Types } from "mongoose";

export abstract class Repository{
    constructor (private model: Model<any>){
    }

    protected validateObjectId(objectId:string){
        if(!Types.ObjectId.isValid(objectId)){
            throw new Error("ID de usuário inválido.")
        }
    }

    protected async getItemDetails(bookId: string) {
        this.validateObjectId(bookId);
        return await this.model.findById(bookId);
    }

    protected async createItem() {
        await this.model.create();
    }

    protected async deleteItem(bookId: string, session?: SessionOption) {
        this.validateObjectId(bookId);
        await this.model.findByIdAndDelete(bookId);
    }

    protected async updateItem(bookId: string, bookData: any) {
        this.validateObjectId(bookId);
        await this.model.findByIdAndUpdate(bookId);
    }
}