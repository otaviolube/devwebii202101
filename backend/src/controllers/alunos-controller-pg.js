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
    
    try{
        const alunoEspecifico = await alunoModelPg.findByPk(id_aluno);
        console.log(alunoEspecifico);
        if(alunoEspecifico){
            res.json({
                status: "ok",
                message: "Aluno recuperado com sucesso",
                aluno: alunoEspecifico
            })
        }else{
            res.json({
                status: "erro",
                message: `Não encontramos o aluno de id ${id_aluno}`
            })
        }
    }catch(erro){
        console.log(erro);
        res.json({
            status: "erro",
            message: `Erro ao recuperar o aluno de id ${id_aluno}`
        })
    }
}

exports.atualizarAlunoPg = async (req, res) => {
    let id_aluno = req.params.id;

    let novoAluno = {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
        data_alteracao: new Date()
    }

    if(id_aluno){
        
        let alunoAtualizado = await alunoModelPg.update(novoAluno, {where: {id: id_aluno}})

        if(alunoAtualizado){
            res.json({
                status: "ok",
                message: "Aluno atualizado com sucesso!",
                novoAluno: novoAluno
            })
        }else{
            res.json({
                status: "erro",
                message: `Erro ao atualizar o aluno de id ${id_aluno}`
            })
        }
    }else{
        console.log('Sem id');
    }
}

exports.removerAlunoPg = async (req, res) => {
    let id_aluno = req.params.id;

    if(id_aluno){
        try{
            let alunoDeletado = await alunoModelPg.destroy({where: {id: id_aluno}});
            if(alunoDeletado){
                res.json({
                    status: "ok",
                    message: `Aluno de id ${id_aluno} deletado com sucesso!`
                })
            }else{
                res.json({
                    status: "erro",
                    message: `Não foi possível deletar o aluno de id ${id_aluno}`
                })

            }
        }catch(erro){
            res.json({
                status: "erro",
                message: `Não foi possível deletar o aluno de id ${id_aluno}`
            })
        }
    }

}