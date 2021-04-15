const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://root:faesa123@localhost:5432/postgres', {dialect: 'postgres'});

const Aluno = sequelize.define('aluno', {
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

(async () => {
    try{
        // const exemploAluno = await Aluno.create({
        //     nome: "Otávio",
        //     email: "otavio.lube@faesa.br",
        //     idade: 35,
        //     data_criacao: Date(),
        //     data_alteracao: null
        // });
        // console.log(exemploAluno);

        const consultaAlunos = await Aluno.findAll();

        const alunoEspecifico = await Aluno.findByPk(3);

        console.log(alunoEspecifico);

        // const dbPostgres = await sequelize.sync();
        // console.log(dbPostgres);
    }catch(error){
        console.log(error);
    }
})()

const port = 3000;
const hostname = '0.0.0.0';

const alunosRoutes = require('./routes/alunos-routes');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/api/alunos/', alunosRoutes)

mongoose.connect('mongodb://root:faesa123@localhost:27017/devwebII?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
db.once('open', function() {
    console.log("Banco de Dados Mongo conectado com sucesso");
});

app.get('/', function(req, res){
    res.json({
        status: "ok",
        message: "Servidor rodando perfeitamente"
    });
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço: http://${hostname}:${port}`);
});