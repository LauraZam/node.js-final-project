const express = require("express")
const pcRouter = require("./routes/pcRouter")
const bodyParser = require("body-parser")
const fs = require("fs")
const qs = require('querystring');
const app = express()
const hbs = require("hbs")

const TelegramBot = require('node-telegram-bot-api');
const token = '1862419881:AAHjdTHvj47JK2CN4kHp6uwzdkZgKs_vnow';
const bot = new TelegramBot(token, { polling: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")
app.use("/pc", pcRouter)
app.get("/pc/db", function (request, response) {
    response.render("db.hbs")
})
app.post("/pc/db", function (request, response) {
    let username = request.body.username;
    let price = request.body.price;
    console.log(request);
    let fileContent = fs.readFileSync("./db/users.txt")
    let usersArray = JSON.parse(fileContent)
    let newUser = {
        username: username,
        price: price
    }
    usersArray.push(newUser);

    fs.writeFileSync("./db/users.txt", JSON.stringify(usersArray))

    response.redirect("/pc/");
})

bot.on('message', (msg) => {
    let fileContent = fs.readFileSync("./db/users.txt")
    let usersArray = JSON.parse(fileContent)
    let message = msg.text;
    for (let i = 0; i < usersArray.length; i++) {
        if(message === usersArray[i].username){
            bot.sendMessage(msg.chat.id, `Имя: ${usersArray[i].username}`)
            bot.sendMessage(msg.chat.id, `Цена покупки: ${usersArray[i].price}`)
        }
        
    }
    // bot.sendMessage(chatId, 'Received your message')
})
app.listen(8080)