const { findAll } = require('../models/jogos');
const jogos = require('../models/jogos');
const { Op } = require("sequelize");
const jogos = require('../models/jogos');



async function abreadd(req, res){
    res.render("jogos/add.ejs",{});
}

async function add(req, res){
    const {nome, desenvolvedora, numeroserial} = req.body;

    if (req.file != undefined){
        var foto = req.file.filename;
    }

    await jogos.create({nome, desenvolvedora, numeroserial, foto}).then((jogos) => {
        res.send ("Jogo " + jogos.nome + " foi criado com sucesso!");
    });
}

async function list(req, res){
    await jogos.findAll().then((jogos) => {
        res.render('jogos/list.ejs', {jogos:jogos});
    });
}

async function filtro(req, res){
    const pesquisar = req.body.pesquisar;
    const jogos = await jogos.findAll({
        where:{nome: {
            [Op.iLike]: "%"+pesquisar+"%"
        }},
    });
    res.render('jogos/list.ejs', {jogos:jogos});
}

async function abreedit(req, res){
    const jogos = await jogos.findByPK(req.params.id);
    res.render("jogos/edt.ejs",{jogos:jogos});
}

async function edit(req, res){
    const jogos = await jogos.findByPK(req.params.id);

    jogos.nome = req.body.nome;
    jogos.desenvolvedora = req.body.desenvolvedora;
    jogos.numeroserial = req.body.numeroserial;
    if(req.file!=undefined){
        jogos.foto = req.file.filename;
    }
    jogos.save().then((jogos) => {
        req.flash('msg', "O jogo "+jogos.nome+" foi anterado com sucesso!");
        res.redirect('/admin/usuario');
    });

}

async function del(req, res){
    const deletar = req.params.id;
    jogos.destroy({where:{id:deletar}}).then(() => {
        req.flash("msg", "O jogo foi deletado com sucesso!");
        res.redirect("/admin/usuario");
    });
}

module.exports = {abreadd, add, list, filtro, abreedit, edit, del};