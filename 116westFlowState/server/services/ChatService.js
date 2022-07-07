import { dbContext } from "../db/DbContext";
import { NotFound } from "../utils/Errors";

class ChatService{
    async createChat(body) {
        const chat = await dbContext.Chats.create(body)
        await chat.populate('creator')
        return chat
    }
    async getchatById(id) {
        const chat = await dbContext.Chats.findById(id).populate('creator')
        if(!chat){
            throw new NotFound("The chat you are looking for may not be found.")
        }
        return chat
    }
    async getAllChats(query = {}) {
        const chats = await dbContext.Chats.find(query)
        return chats
    }

}

export const chatService = new ChatService()