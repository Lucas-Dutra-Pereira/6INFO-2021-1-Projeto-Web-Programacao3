const Sequelize = require('sequelize');

const dbConfig = require ('../config/config.js'); //Arquivo de configuração

const jogos = require('../models/jogos');

const conexao = new Sequelize(dbConfig);

jogos.init(conexao);

module.exports = conexao;