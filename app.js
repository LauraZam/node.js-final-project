const express = require("express")
const pcRouter = require("./routes/pcRouter")
const bodyParser = require("body-parser")
const app = express()
const hbs = require("hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")
app.use("/pc", pcRouter)
app.listen(8080)