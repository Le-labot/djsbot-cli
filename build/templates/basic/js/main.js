const { Client } = require('discord.js');
const client = new Client();
const prefix = process.env.COMMAND_START

client.on('ready', () => {
    console.log('I\'m ready !');
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === "ping") {
        return message.channel.send("Pong !");
    }
});


client.login(process.env.BOT_TOKEN)