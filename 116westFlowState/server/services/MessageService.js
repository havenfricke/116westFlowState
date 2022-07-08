import { dbContext } from "../db/DbContext";
import { socketProvider } from "../SocketProvider"
class MessageService {
    async createMessage(body) {
        const message = await dbContext.Messages.create(body)
        await message.populate('creator')
        await message.populate('chat')
        socketProvider.messageRoom('chat-' + body.chatId, 'new:message', message)
        const offerNotify = await dbContext.Chats.findById(body.chatId)
        socketProvider.messageUser(offerNotify.creatorId.toString(), 'new:notify', { message: `${message.creator.name} just messaged you`, offerNotify})
        return message
    }
    async getChatMessages(id) {
        const messages = await dbContext.Messages.find({ chatId: id }).populate('creator').populate('chat');
        return messages
    }

}

export const messageService = new MessageService()