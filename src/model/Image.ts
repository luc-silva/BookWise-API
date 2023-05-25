import { Schema, model } from "mongoose";

const ImageSchema = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        buffer: { type: Buffer, required: true },
    },
    { timestamps: true }
);

export = model("Image", ImageSchema);
