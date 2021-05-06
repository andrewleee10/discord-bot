module.exports = {
  name: 'stop',
  description: 'Stop the bot and leave the channel!',
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel

    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command!')
    await voiceChannel.leave()
    await message.channel.send('Leaving channel :wave:')
  }
}