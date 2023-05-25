import { Schema, model } from "mongoose";

const BookSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        book_author: { type: String, required: true, maxlength: 30 },
        title: { type: String, required: true, maxlength: 30 },
        description: { type: String, required: true, maxlength: 300 },
        edition: { type: String, required: true, maxlength: 15 },
        tags: { type: String, required: true, maxlength: 15 },
        status: { type: String, required: true, maxlength: 10 },
        pages: { type: Number, required: true },
        released_date: { type: Date, required: true },
        volume: { type: String, maxlength: 10 },
        franchise: { type: String, maxlength: 30 },
    },
    { timestamps: true }
);

export = model("Book", BookSchema);
