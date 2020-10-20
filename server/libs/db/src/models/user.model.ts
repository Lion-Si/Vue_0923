import { prop } from '@typegoose/typegoose'

export class User{
    @prop()
    username:String

    @prop()
    password:String
}