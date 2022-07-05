import { Auth0Provider } from "@bcwdev/auth0provider";
import { chatService } from "../services/ChatService";
import BaseController from "../utils/BaseController";

export class ChatController extends BaseController {
 constructor(){
    super('chat')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .get('', this.getAllChats)
    .get('/:id', this.getChatById)
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

}