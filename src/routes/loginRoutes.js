const express = require("express");
const routes = express.Router();
const loginController = require("../controller/loginController");

//Abre Tela Login
routes.get("/", loginController.abrelogin);
// Logar
routes.post("/", loginController.logar);

module.exports = routes;