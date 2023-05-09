import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String },
    },
    birth_date: { type: Date },
    description: { type: String, default: "" },
},
{ timestamps: true });

export = model("Author", AuthorSchema);
