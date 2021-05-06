module.exports = {
  name: 'stop',
  description: 'this is a stop command!',
  execute(message, args) {
    message.channel.send('Stopping...')
  }
}