import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            first: { type: String, required: true, maxlength:15 },
            last: { type: String,maxlength:15 },
        },
        password: { type: String, required: true },
        email: { type: String, unique: true, maxlength:25 },
        username: { type: String, unique: true, maxlength:15 },
    },
    { timestamps: true }
);

export = model("User", UserSchema);
