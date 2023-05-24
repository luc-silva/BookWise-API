import { Model, SessionOption } from "mongoose";
import User from "../model/User";
import { Repository } from "./Repository";
import { UserData } from "../../global";
import Book from "../model/Book";

class UserRepository extends Repository {
    constructor(user: Model<any>) {
        super(user);
    }

    public async findUserByEmail(email: string) {
        return await User.findOne({ email });
    }

    public async getUserStatus(userId: string) {
        this.validateObjectId(userId);
        let read = await Book.find({ user: userId }).count({ status: "Read" });
        let not_read = await Book.find({ user: userId }).count({ status: "Not Read" });
        let dropped = await Book.find({ user: userId }).count({ status: "Dropped" });
        let total = (await Book.find({ user: userId })).length

        return { read , not_read, dropped, total, total_read: read * 100 / total };
    }

    public async findUserById(userId: string) {
        return await this.getItemDetails(userId);
    }

    public async createUser(data: UserData) {
        return await this.createItem(data);
    }
}

export default new UserRepository(User);
