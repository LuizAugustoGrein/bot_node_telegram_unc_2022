// importando as variaveis de ambiente

const env = require('../.env')

// importando a biblioteca Telegraf
const { Telegraf } = require('telegraf')

/**
 * criando o objeto bot e o instanciamento como um novo 
 * objeto da classe Telegraf
 */
const bot = new Telegraf(env.token)

// inicializando o bot
bot.start(ctx => {
    const from = ctx.update.message.from
    if(from.id == '5470013193') {
        ctx.reply(`Ola! seja bem vindo ${from.first_name}!`)
        console.log(from.first_name)
        console.log(ctx.message)
    } else {
        ctx.reply(`Cai fora ${from.first_name}!`)
        console.log(from.first_name)
    }
})

bot.on('text', async (ctx, next) => {
    const from = ctx.update.message.from
    if(from.id == '5470013193') {
        ctx.reply(`Ola! seja bem vindo ${from.first_name}!`)
        console.log(from.first_name)
    } else {
        ctx.reply(`Cai fora ${from.first_name}!`)
        console.log(from.first_name)
    }
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Resposta 2')
})

/**
 * iniciando o polling com o servidor para verificar se ha 
 * novas mensagens e/ou conversas
 */

bot.startPolling()