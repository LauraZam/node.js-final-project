const express = require("express")
const pcController = require("../controllers/pcController");
const pcRouter = express.Router();

pcRouter.get("/hdd", pcController.getHDD)
pcRouter.get("/cpu", pcController.getCPU)
pcRouter.get("/ram", pcController.getRAM)
pcRouter.get("/keyboard", pcController.getKbrd)
pcRouter.get("/mouse", pcController.getMouse)
pcRouter.get("/", pcController.getPC)
module.exports = pcRouter