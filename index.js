const Discord = require('discord.js')
const fs = require('fs')
require('dotenv').config()

const client = new Discord.Client()

const prefix = '.'

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log('Spootify is online!')
})

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  if(command === 'play') {
    client.commands.get('play').execute(message, args)
  } else if (command === 'stop') {
    client.commands.get('stop').execute(message, args)
  }
})

client.login(process.env.TOKEN)