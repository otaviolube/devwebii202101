const mongoose = require('mongoose');

mongoose.connect('mongodb://root:faesa123@localhost:27017/devwebII?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
db.once('open', function() {
    console.log("Banco de Dados Mongo conectado com sucesso");
});

module.exports = db;