const alunosModelPg = require('../models/alunos-model-pg');

exports.adicionarAlunoPg = async (req, res) => {
    const exemploAluno = await alunoModelPg.create({
        nome: "Seu Creyson",
        email: "seucreyson.lube@faesa.br",
        idade: 35,
        data_criacao: Date(),
        data_alteracao: null
    });
}

exports.listarAlunosPg = async (req, res) => {
    try{
        const alunos = await alunosModelPg.findAll();
        res.json({
            status: 'ok',
            alunos: alunos
        })
    }catch(error){
        console.log(error);
        res.json({
            status: 'erro',
            message: 'Não foi possível recuperar os alunos'
        })
    }
}

exports.listarAlunoPorIDPg = async (req, res) => {
    let id_aluno = req.params.id;
    
    const alunoEspecifico = await alunoModelPg.findByPk(3);
}

exports.atualizarAlunoPg = (req, res) => {
    let id_aluno = req.params.id;

}

exports.removerAlunoPg = (req, res) => {
    let id_aluno = req.params.id;

}