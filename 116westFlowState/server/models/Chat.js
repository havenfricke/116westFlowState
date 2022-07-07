import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ChatSchema = new Schema(
    {
        creatorId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
        name: {type: String, required: true},
    },
    {timestamps: true, toJSON: {virtuals: true}}
)

ChatSchema.virtual('creator',{
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})