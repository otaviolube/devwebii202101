const alunoModelPg = require('../models/alunos-model-pg');

exports.adicionarAlunoPg = async (req, res) => {

    const aluno = req.body;

    console.log(aluno);

    const alunoExiste = await alunoModelPg.findAll({
        where: {
            email: aluno.email
        }
    });

    console.log(alunoExiste);
    if(alunoExiste.length > 0){
        res.json({
            status: "fail",
            resultado: "Já existe um aluno com o e-mail cadastrado"
        })
    }else{
        const alunoInserido = await alunoModelPg.create({
            nome: aluno.nome,
            email: aluno.email,
            idade: aluno.idade,
            data_criacao: Date(),
            data_alteracao: null
        });
        res.json({
            status: "ok",
            resultado: alunoInserido
        })
    }

    
}

exports.listarAlunosPg = async (req, res) => {
    try{
        const alunos = await alunoModelPg.findAll();
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