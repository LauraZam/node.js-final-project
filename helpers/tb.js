const TelegramBot = require('node-telegram-bot-api');
const token = '1857851823:AAF4PT1V1zUuDCfs7W81KAQcTn5-Lm4f-yg';
let fs = require("fs")
const bot = new TelegramBot(token, { polling: true });
let fileContent = fs.readFileSync("../db/users.txt")
let usersArray = JSON.parse(fileContent)
console.log(usersArray);
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const firstName = msg.chat.first_name;
//     const message = msg.text;
    
    
    
//     // bot.sendMessage(chatId, 'Received your message')
// })