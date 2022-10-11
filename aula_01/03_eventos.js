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
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo ${name}!
        Eu sou um bot em treinamento!
        Por enquanto eu:
            - repito o que voce digita
            - digo as coordenadas de latitude e longitude
            - retorno o nome e o telefone de um contato que
            - ouco uma mensagem e audio e retorno a duracao
            - informo a resolucao das fotos que voce me enviou
    `)
    
})

/**
 * iniciando o polling com o servidor para verificar se ha 
 * novas mensagens e/ou conversas
 */

bot.startPolling()