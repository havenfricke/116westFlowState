import { Auth0Provider } from "@bcwdev/auth0provider";
import { chatService } from "../services/ChatService";
import BaseController from "../utils/BaseController";

export class ChatController extends BaseController {
 constructor(){
    super('chat')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .get('', this.getAllChats)
 }
    async getAllChats(req, res, next) {
        try {
            const chats = await chatService.getAllChats(req.query)
            res.send(chats)
        } catch (error) {
            next(error)
        }
    }

}