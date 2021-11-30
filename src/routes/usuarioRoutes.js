const express = require("express");
const routes = express.Router();
const usuarioController = require('../controller/usuarioController');
const upload = require('../config/multer');


//Abre ADD
routes.get("/add", usuarioController.abreadd);
// ADD
routes.post("/add", upload.single("foto"), usuarioController.add);

//List
routes.get("/", usuarioController.list);
//List Filtro
routes.post("/", usuarioController.filtro);

//Abre Edit
routes.get("/edt/:id", usuarioController.abreedit);
//Edit
routes.post("/edt/:id",  upload.single("foto"), usuarioController.edit);

//Delete
routes.get("/del/:id", usuarioController.del);


module.exports = routes;