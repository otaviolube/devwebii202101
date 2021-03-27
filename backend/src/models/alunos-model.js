const mongoose = require('mongoose');

const alunoSchema = mongoose.Schema({
    nome: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    idade: {
        type: mongoose.Schema.Types.Number,
        required: false
    },
    data_criacao: {
        type: mongoose.Schema.Types.Date,
        default: Date.now
    },
    data_alteracao: {
        type: mongoose.Schema.Types.Date,
        default: null
    }
});

let Aluno = module.exports = mongoose.model('aluno', alunoSchema);

module.exports.get = function(callback, limit){
    Aluno.find(callback).limit(limit);
}