import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ChatService{
async getChatById(id){
    const res = await api.get('api/chat/' + id)
    logger.log('getchatbyid', res.data)
    AppState.activechat = res.data 
}

async getAllChats() {
    const res = await api.get('api/chat')
    logger.log('getallchats', res.data)
    AppState.chats = res.data
}

async createChat(body){
    const res = await api.post('api/chat', body)
    logger.log('createChat', res.data)
    AppState.activeChat = res.data
    AppState.chats = AppState.chats.push(res.data)

}
}

export const chatService = new ChatService()