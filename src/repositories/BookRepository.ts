import { SessionOption } from "mongoose";
import { Repository } from "./Repository";
import Book from "../model/Book";

class BookRepository extends Repository {
    
}

export default new BookRepository(Book);
