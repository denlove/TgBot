import { Bot } from 'grammy'
import 'dotenv/config'

const main = () => {
    const token = process.env.TOKEN || ''

    const bot = new Bot(token)

    bot.command('start', ctx => ctx.reply('Welcome! Up and running.'))

    bot.on('message', ctx => ctx.reply('Got another message!'))

    // Start the bot.
    bot.start()
}

main()
