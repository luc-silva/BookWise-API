import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String },
    },
    birth_date: { type: Date },
    description: { type: String, default: "" },
});

export = model("Author", AuthorSchema);
