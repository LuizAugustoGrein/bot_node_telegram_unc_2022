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

bot.on('text', ctx => {
    const texto = ctx.update.message.text
    console.log(texto)
    ctx.reply(`O texto recebido foi: '${texto}'`)
})

bot.on('phone', ctx => {
    const cont = ctx.update.message.phone
    console.log(cont)
    ctx.reply(`Legal! o telefone do ${cont.first_name} e: ${cont.phone_number}`)
})

bot.on('location', ctx => {
    const loc = ctx.update.message.location
    console.log(loc)
    ctx.reply(`A sua localizacao e: latitude ${loc.latitude} e longitude ${loc.longitude}`)
})

bot.on('voice', ctx => {
    const voz = ctx.update.message.voice
    console.log(voz)
    ctx.reply(`Audio de ${voz.duration} segundos`)
})

bot.on('photo', ctx => {
    const foto = ctx.update.message.photo
    console.log(foto)
    console.log(foto.length)
    foto.forEach((photo,i) => {
        ctx.reply(`A ${i} foto tem resolucao de: ${photo.width} x ${photo.height} pixels!`)
    })
})

bot.on('sticker', ctx => {
    const stic = ctx.update.message.sticker
    console.log(stic)
    ctx.reply(`Voce enviou o ${stic.emoji} do conjunto ${stic.set_name}`)
})

/**
 * iniciando o polling com o servidor para verificar se ha 
 * novas mensagens e/ou conversas
 */

bot.startPolling()