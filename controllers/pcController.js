const PC = require("../models/pc");
let db = require("../helpers/db")

// обработчик гет запроса по адресу /laptops
exports.getHDD = function (request, response) {
    db.getHDD(request, response);
}
exports.getCPU = function (request, response) {
    db.getCPU(request, response);
}
exports.getRAM = function (request, response) {
    db.getRAM(request, response);
}
exports.getKbrd = function (request, response) {
    db.getKbrd(request, response);
}
exports.getMouse = function (request, response) {
    db.getMouse(request, response);
}
