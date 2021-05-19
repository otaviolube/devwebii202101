const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`, {dialect: 'postgres'});



const sincronizarPostgres = async () => {
    try{
        sequelize.sync();
    }catch(erro){
        console.error(erro);
    }
}


module.exports = {sequelize, Sequelize, sincronizarPostgres};