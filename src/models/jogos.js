const { Model, DataTypes } = require("sequelize");

class jogos extends Model {
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                desenvolvedora: DataTypes.STRING,
                numeroserial: DataTypes.INTEGER,
                foto: DataTypes.STRING
            },{sequelize, freezeTableName: true}
        );
    }
}


module.exports = jogos;