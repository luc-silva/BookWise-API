import { Schema, model } from "mongoose";

const BookSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required:true },
        book_collection: { type: Schema.Types.ObjectId, ref: "Collection" },
        book_author: { type: Schema.Types.ObjectId, ref: "Author" },
        title: { type: String, required: true, maxlength: 30 },
        edition: { type: String, required: true, maxlength: 15  },
        pages: { type: Number, required: true },
        released_date: { type: Date, required: true },
        volume: { type: String, maxlength: 10 },
        franchise: { type: String, maxlength: 30 },
    },
    { timestamps: true }
);

export = model("Book", BookSchema);
