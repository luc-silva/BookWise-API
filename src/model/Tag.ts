import { Schema, model } from "mongoose";

const TagSchema = new Schema({
    name: { type: String, required: true },
},
{ timestamps: true });

export = model("Tag", TagSchema);
