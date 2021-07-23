const express = require("express")
const pcRouter = require("./routes/pcRouter")
const bodyParser = require("body-parser")
const fs = require("fs")
const qs = require('querystring');
const app = express()
const hbs = require("hbs")
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

    response.redirect("/pc");
})
app.listen(8080)