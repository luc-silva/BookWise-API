import { Model, SessionOption, Types } from "mongoose";

/**
 * Base class for models repositories.
 */
export abstract class Repository {
    constructor(private model: Model<any>) {
        this.model = model;
    }

    /**
     * Check if given string is a valid MongoDB Object id.
     * @param objectId Item object id.
     */
    protected validateObjectId(objectId: string) {
        if (!Types.ObjectId.isValid(objectId)) {
            throw new Error("ID de usuário inválido.");
        }
    }

    /**
     * Get item details with given Object Id.
     * @param itemId Item Object Id.
     * @returns Object containing the item details
     */
    protected async getItemDetails(itemId: string) {
        this.validateObjectId(itemId);
        return await this.model.findById(itemId);
    }

    /**
     * Create an item instance with given data.
     * @param data Object containg the data.
     */
    protected async createItem(data:any):Promise<any> {
        return await this.model.create(data);
    }

    /**
     * Delete instance with given object id.
     * @param itemId Item Object Id.
     * @param session Transaction session options.
     */
    protected async deleteItem(itemId: string, session?: SessionOption) {
        this.validateObjectId(itemId);
        await this.model.findByIdAndDelete(itemId);
    }

    /**
     * Update a instance with given object id and data.
     * @param itemId Item Object Id.
     * @param data Object containg the updated data.
     */
    protected async updateItem(itemId: string, data:any) {
        this.validateObjectId(itemId);
        await this.model.findByIdAndUpdate(itemId, data);
    }
}
