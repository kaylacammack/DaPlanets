import { Schema } from "mongoose";


export const ColonySchema = new Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true },
    planetId: { type: Schema.Types.ObjectId, required: true },
    speciesId: { type: Schema.Types.ObjectId, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

ColonySchema.virtual('planet', {
    localField: 'planetId',
    ref: 'Planet',
    foreignField: '_id',
    justOne: false
})
ColonySchema.virtual('species', {
    localField: 'speciesId',
    ref: 'Species',
    foreignField: '_id',
    justOne: false
})