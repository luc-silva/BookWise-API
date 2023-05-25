import { Model } from "mongoose";
import { Repository } from "./Repository";
import Image from "../model/Image";

class ImageRepository extends Repository {
    constructor(image: Model<any>) {
        super(image);
    }

    public async createImage(data: any) {
        return await this.createItem(data);
    }

    public async updateImage(imageId: string, data: any) {
        return await this.updateItem(imageId, data);
    }

    public async getImageById(imageId: string) {
        return await this.getItemDetails(imageId);
    }
}
export default new ImageRepository(Image);
