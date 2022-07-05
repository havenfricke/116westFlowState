import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class ChatController extends BaseController {
 constructor(){
    super('chat')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .get('', this.getAllChats)
 }
    getAllChats(req, res, next) {
        try {
            const chats = await 
        } catch (error) {
            next(error)
        }
    }

}