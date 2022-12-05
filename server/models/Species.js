import { Schema } from "mongoose";

export const SpeciesSchema = new Schema({
    name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })