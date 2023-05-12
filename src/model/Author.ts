import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
    name: {
        first: { type: String, required: true, maxlength:25},
        last: { type: String, maxlength:25},
    },
    birth_date: { type: Date },
    description: { type: String, default: "", maxlength:250 },
},
{ timestamps: true });

export = model("Author", AuthorSchema);
