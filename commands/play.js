module.exports = {
  name: 'play',
  description: 'this is a play command!',
  execute(message, args) {
    message.channel.send('Now playing!')
  }
}