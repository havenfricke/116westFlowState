import { AppState } from "../AppState"

class MessageService {
    async getMessagesByChat(id){
        const res = await api.get('api/chat/' + id + '/messages')
        logger.log('getMessagesByChat', res.data)
        AppState.messages = res.data
    }
}

export const messageService = new MessageService()