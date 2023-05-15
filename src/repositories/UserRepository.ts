import { Model, SessionOption } from "mongoose";
import User from "../model/User";
import { Repository } from "./Repository";

class UserRepository extends Repository {
    constructor(user: Model<any>) {
        super(user);
    }

    public async findUserByEmail(email: string) {
        return await User.findOne({ email });
    }

    public async findUserById(userId:string){
        return await this.getItemDetails(userId)
    }
}

export default new UserRepository(User);
