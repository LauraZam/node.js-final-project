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
app.use("/pc/db", function (request, response) {
    if (request.method === "GET") {
        response.render("db.hbs")
    }else if (request.method === "POST") {
        var body = '';

        request.on('data', function (data) {
            body += data;

            if (body.length > 1e6)
                request.connection.destroy();
        });
        request.on('end', function () {
            let post = qs.parse(body)
            let username = post.username;
            let price = post.price;
            let newUser = {
                username: username,
                price: price
            }
            let usersFileContent = fs.readFileSync("./db/users.txt");
            let usersArray = null;
            try {
                usersArray = JSON.parse(usersFileContent)
            } catch {
                usersArray = []
            }
            usersArray.push(newUser);
            fs.writeFileSync("./db/users.txt", JSON.stringify(usersArray))
        });
    }
})
app.listen(8080)