import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ChatSchema } from '../models/Chat';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Chats = mongoose.model('Chat', ChatSchema);
  Messages = mongoose.model('Message', )
}

export const dbContext = new DbContext()
