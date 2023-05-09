import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            first: { type: String, required: true },
            last: { type: String },
        },
        password: { type: String, required: true },
        email: { type: String },
    },
    { timestamps: true }
);

export = model("User", UserSchema);
