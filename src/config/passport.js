var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const { password } = require('./config');
const jogos = require('../models/jogos');
passport.serializeUser(function(user, done){
    done(null, user.id)
})
passport.deserializeUser(function(id, done){
    jogos.findByPk(id).then(function(user, err){
        done(err, user);
    })
})

passport.use(new LocalStrategy({
    usernameField: 'desenvolvedora',
    passwordField: 'numeroserial',
    passReqToCallback: true
},
  function(req, username, password, done) {
      jogos.findOne({where:{desenvolvedora: username}}).then(function(user, err){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, req.flash('msg', "O Jogo não existe!"))
        }
        if(user.numeroserial != password){
            return done(null, false, req.flash('msg', "O Número Serial está incorreto!"))
        }
        return done(null, user)
      });
  }
));

module.exports = passport;