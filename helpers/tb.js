const TelegramApi=require('node-telegram-bot-api')

const token ='1912952094:AAGtzz5g6im5Nrs8zf0PFfEVxCZ3bT3lJKA'

const bot=new TelegramApi(token, {polling: true})

bot.on('message', msg => {
    const text=msg.text;
    const chatid=msg.chat.id;
    
    // if(text=== '/start'){
    //     bot.sendMessage(chatid, `привет, ${msg.from.first_name}`)
    // }
   
    // if(text=== '/info'){
    //     bot.sendMessage(chatid, `тебе , ${msg.from.age}`)
    // }
    if (text === username) {
        bot.sendMessage(username);
        bot.sendMessage(price)
    }

    
})