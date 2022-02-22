const Discord = require('discord.js')
const server = require ("./server")
const prefix = "$"

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "DIRECT_MESSAGES",
    "GUILD_MEMBERS"
  ]
})

client.on("ready",() =>{
  console.log(`Logged in as ${client.user.tag}`)
})

  

client.on("messageCreate", (message) => {
 if (message.content == "ping"){
return message.channel.send(`bot ping is ${client.ws.ping}`)
 }
})

client.login(process.env.TOKEN)
