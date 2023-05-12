import { Model, SessionOption } from "mongoose";
import User from "../model/User";
import { Repository } from "./Repository";

class UserRepository extends Repository {
    constructor(user:Model<any>){
        super(user)
    }
}

export default new UserRepository(User);
