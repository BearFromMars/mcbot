const mineflayer = require('mineflayer')

const InfoCommand = 'f!info'

var options = {
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4],
    password: process.argv[5],
    //auth: process.argv[6] 
}

var bot = mineflayer.createBot(options)

bot.on('error',(err) => console.log(err))

const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
bot.once('spawn', () => {
    mineflayerViewer(bot, { port: process.argv[3], firstPerson: true })
})

function relog() {1



bot.on('end', () => {
    console.log('Lost Connection')
    setInterval(relog2, 300000)
});

function relog2() {
    bot = mineflayer.createBot(options)
    console.log('Restarted =>', bot)
}

}

bot.on('message', (message) => {
    console.log(message.toAnsi())
})

bot.on('messagestr', (message, messagePosition, jsonMsg) => {
    if (message.includes("InfoCommand") === true) return
    console.log('info')
})

bot.on('login', () => {
    bot.chat("Hello, I am FireDragon189. A Minecraft bot in alpha, as well as a player, though my account is being accessed by code right now. My prefix is 'f!', try 'f!info' (!without quotes!)")
})

bot.on('kicked', console.log)

relog()