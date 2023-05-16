import { Repository } from "./Repository";
import Author from "../model/Author";
import { Model } from "mongoose";
import { AuthorData } from "../../global";

class AuthorRepository extends Repository {
    constructor(author: Model<any>) {
        super(author);
    }

    public async findAuthorById(authorId: string) {
        return await this.getItemDetails(authorId);
    }

    public async createAuthor(data: AuthorData) {
        await this.createAuthor(data);
    }
}

export default new AuthorRepository(Author);
