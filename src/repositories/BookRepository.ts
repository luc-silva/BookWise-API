import { Model, SessionOption } from "mongoose";
import { Repository } from "./Repository";
import Book from "../model/Book";
import { BookData, FetchedBookData } from "../../global";

class BookRepository extends Repository {
    constructor(book: Model<any>) {
        super(book);
    }

    public async createBook(data: BookData) {
        await this.createItem(data);
    }

    public async deleteBook(bookId: string) {
        this.validateObjectId(bookId);
        this.deleteItem(bookId);
    }

    public async updateBook(bookId: string, data: BookData) {
        this.validateObjectId(bookId);
        this.updateItem(bookId, data);
    }

    public async getBookDetails(bookId: string): Promise<FetchedBookData> {
        this.validateObjectId(bookId);
        return await this.getItemDetails(bookId);
    }

    public async getBooksByUserId(userId: string) {
        this.validateObjectId(userId);
        return await Book.find({ user: userId }).select({ id: 1 });
    }
}

export default new BookRepository(Book);
