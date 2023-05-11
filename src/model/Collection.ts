import { Schema, model } from "mongoose";

const CollectionSchema = new Schema({
    collection_name: { type: String, required: true },
},
{ timestamps: true });

export = model("Collection", CollectionSchema)