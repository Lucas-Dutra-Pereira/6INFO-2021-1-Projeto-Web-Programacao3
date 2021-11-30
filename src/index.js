const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const autenticacao = require("./config/autenticacao");

//Importação de Rotas
const usuarioRoutes = require("./routes/usuarioRoutes");
const loginRoutes = require("./routes/loginRoutes")

require("./database/index");

app.use(session({ secret:"paralelepipedo", saveUninitialized: true, resave: true }));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({  extended: true  }));

app.set("view engine", "ejs");
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin/usuario",autenticacao.autenticacao(), usuarioRoutes);
app.use("/admin", loginRoutes);

app.listen(3000, function(req, res){
    console.log("Servidor operante na porta 3000");
});