const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://root:faesa123@localhost:5432/postgres', {dialect: 'postgres'});

const AlunoModel = sequelize.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_alteracao: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

module.exports = AlunoModel