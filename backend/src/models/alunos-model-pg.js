const Sequelize = require('../infra/postgres').Sequelize;
const postgres = require('../infra/postgres').sequelize;

const AlunoModel = postgres.define('aluno', {
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