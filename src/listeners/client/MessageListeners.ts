import { Listener } from 'discord-akairo'
import { Message } from 'discord.js'

export default class MessageListener extends Listener { // Runs on message send
    public constructor(){
        super("message", {
            emitter: "client",
            event: "message",
            category: "client",
        });
    }
    public async exec(message: Message): Promise<Message> {
        console.log(message.content)
        return 
    }
}