import { Model, SessionOption } from "mongoose";
import { Repository } from "./Repository";
import Book from "../model/Book";
import { BookData } from "../../global";

class BookRepository extends Repository {
    constructor(book: Model<any>) {
        super(book);
    }

    public async createBook(data: BookData) {
        await this.createItem(data);
    }
}

export default new BookRepository(Book);
