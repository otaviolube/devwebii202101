const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://root:faesa123@localhost:5432/postgres', {dialect: 'postgres'});


const sincronizarPostgres = async () => {
    try{
        sequelize.sync();
    }catch(erro){
        console.error(erro);
    }
}


module.exports = {sequelize, Sequelize, sincronizarPostgres};