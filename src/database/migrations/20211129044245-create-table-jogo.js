'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('jogos', 
    { 
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING, 
        allowNull: false
      },
      desenvolvedora:{
        type: Sequelize.STRING,
        allowNull:false
      },
      numeroserial:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      foto:{
        type: Sequelize.STRING
      },
      createdAt:{
        type: Sequelize.DATE
      },
      updatedAt:{
        type: Sequelize.DATE
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('jogos');
  }
};
