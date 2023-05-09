import { Schema, model } from "mongoose";

const BookSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        collection: { type: Schema.Types.ObjectId, ref: "Collection" },
        name: { type: String, required: true },
        book_author: {
            first_name: { type: String, required: true },
            last_name: { type: String },
        },
        pages: { type: Number, required: true },
        released_date: { type: Date, required: true },
        franchise: { type: String },
    },
    { timestamps: true }
);

export = model("Book", BookSchema);
