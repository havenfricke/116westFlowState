import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MessageSchema = new Schema(
    {
        body: {type: String, required: true},
        creatorId : {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
        chatId: {type: Schema.Types.ObjectId, required: true, ref: 'Chat'}
    },
    { timestamps: true, toJSON: {virtuals: true} }
)

MessageSchema.virtual('creator',{
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})

MessageSchema.virtual('chat', {
    localField: 'offerId',
    foreignField: '_id',
    justOne: true,
    ref: 'Chat'
})