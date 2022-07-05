import { Auth0Provider } from "@bcwdev/auth0provider";
import { chatService } from "../services/ChatService";
import { messageService } from "../services/MessageService";
import BaseController from "../utils/BaseController";

export class ChatController extends BaseController {
 constructor(){
    super('chat')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .get('', this.getAllChats)
    .get('/:id', this.getChatById)
    .get('/:id/messages', this.getChatMessages)
    .post('', this.createChat)
    .post('/:id/messages', this.createMessage)
 }
   
   
   
    async getAllChats(req, res, next) {
        try {
            const chats = await chatService.getAllChats(req.query)
            res.send(chats)
        } catch (error) {
            next(error)
        }
    }

    async getChatById(req, res, next) {
        try {
            req.body.id = req.params.id
            const chat = await chatService.getchatById(req.params.id)
            res.send(chat)
        } catch (error) {
            next(error)
        }
    }

    async getChatMessages(req, res, next) {
       try {
        req.body.chatId = req.params.id
         const messages = await messageService.getChatMessages(req.params.id)
         res.send(messages)
       } catch (error) {
        next(error)
       }
    }

    async createChat(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            req.body.chatId = req.params.id
            const chat = await chatService.createChat(req.body)
            res.send(chat)
        } catch (error) {
            next(error)
        }
    }

    async createMessage(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            req.body.chatId = req.params.id
            const message = await messageService.createMessage(req.body)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }

}