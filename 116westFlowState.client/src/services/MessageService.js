import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MessageService {
    async getMessagesByChat(id){
        const res = await api.get('api/chat/' + id + '/messages')
        logger.log('getMessagesByChat', res.data)
        AppState.messages = res.data
    }

    async createMessage(body, id){
        const res = await api.post('api/chat/' + id + '/messages', body)
        logger.log('createmessage', res.data)
        AppState.messages = [...AppState.messages, res.data]
    }
}

export const messageService = new MessageService()