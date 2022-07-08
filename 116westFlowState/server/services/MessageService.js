import { dbContext } from "../db/DbContext";

class MessageService {
    async createMessage(body) {
        const message = await dbContext.Messages.create(body)
        await message.populate('creator')
        await message.populate('chat')
    }
    async getChatMessages(id) {
        const messages = await dbContext.Messages.find({ chatId: id }).populate('creator').populate('chat');
        return messages
    }

}

export const messageService = new MessageService()