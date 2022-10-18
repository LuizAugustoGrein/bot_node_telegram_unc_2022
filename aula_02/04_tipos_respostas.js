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
/*bot.start(async ctx => {
    const user = ctx.update.message.from.first_name
    await ctx.replyWithHTML(`
    Destacando mensagens utilizando
    <b> HTML </b>
    <i> de varias </i> <code> formas </code>
    <pre> possiveis </pre>
    <a href="https://www.google.com">
     Google
    </a>
    `)
    
})*/

bot.start(async ctx => {
    const user = ctx.update.message.from.first_name
    await ctx.replyWithMarkdownV2('Destacando mensagens utilizando ' +
    '*Markdown* _de varias_ formas ```possiveis```' +
    ' [Google](https://google.com)')
})


/**
 * iniciando o polling com o servidor para verificar se ha 
 * novas mensagens e/ou conversas
 */

bot.startPolling()