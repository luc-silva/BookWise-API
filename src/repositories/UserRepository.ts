import { SessionOption } from "mongoose";
import User from "../model/User";
import { Repository } from "./Repository";

class UserRepository extends Repository {

}

export default new UserRepository(User);
