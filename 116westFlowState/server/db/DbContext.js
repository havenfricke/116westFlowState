import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ChatSchema } from '../models/Chat';
import { MessageSchema } from '../models/Message';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Chats = mongoose.model('Chat', ChatSchema);
  Messages = mongoose.model('Message', MessageSchema);
}

export const dbContext = new DbContext()
