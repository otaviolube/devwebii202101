const alunosModel = require('../models/alunos-model');
const mongodb = require('../infra/mongodb');

exports.adicionarAluno = (req, res) => {
    alunosModel.find((err, alunos) => {
        if(err){
            console.log("Não foi possível recuperar os alunos!");
            res.json({
                status: "erro",
                message: "Não foi possível recuperar os alunos e portanto inserir o novo aluno!"
            });
        }
        //Eu tenho a lista dos alunos

        for(let i = 0; i < alunos.length; i++){
            if(req.body.email === alunos[i].email){
                res.json({
                    status: "erro",
                    message: `O aluno ${req.body.nome} já está cadastrado com o e-mail ${req.body.email}`
                });
                return;
            }
        }

        let aluno = new alunosModel();
        aluno.nome = req.body.nome;
        aluno.email = req.body.email;
        aluno.idade = req.body.idade;
        aluno.save((erro) => {
            if(erro){
                res.send({
                    status: "erro",
                    message: "Não foi possível inserir o aluno."
                });
            }else{
                res.send({
                    status: "ok",
                    message: `Aluno ${req.body.nome} inserido com sucesso!`
                });
            }
        })
    });
}

exports.listarAlunos = (req, res) => {
    alunosModel.find(function(err, alunos){
        if(err){
            console.log("Não foi possível recuperar os alunos!");
            res.json({
                status: "erro",
                message: "Não foi possível recuperar os alunos!"
            });
        }else{
            res.json({
                status: "ok",
                alunos: alunos
            })
        }
        
    });
}

exports.listarAlunoPorID = (req, res) => {
    let id_aluno = req.params.id;
    
    alunosModel.findById(id_aluno, function(err, aluno){
        if(err || !aluno){
            console.log(`Não foi possivel recuperar o aluno de id: ${id_aluno}`);
            res.json({
                status: "erro",
                message: `Não foi possivel recuperar o aluno de id: ${id_aluno}`
            });
        }else{
            res.json({
                status: "ok",
                aluno: aluno
            })
        }
        
    });
}

exports.atualizarAluno = (req, res) => {
    let id_aluno = req.params.id;

    alunosModel.findById(id_aluno, (erro, aluno) => {
        if(erro || !aluno){
            console.log("Não foi possível recuperar os aluno!");
            res.json({
                status: "erro",
                message: `Não foi possível recuperar o aluno de id ${id_aluno} para atualização`
            });
        }else{
            aluno.nome = req.body.nome;
            aluno.email = req.body.email;
            aluno.idade = req.body.idade;
            aluno.data_alteracao = Date.now();
            aluno.save((err => {
                if(err){
                    res.json({
                        status: "erro",
                        message: "Houve um erro ao atualizar o aluno"
                    });
                }else{
                    res.json({
                        status: "ok",
                        message: `Aluno ${aluno.nome} atualizado com sucesso!`,
                        novoAluno: aluno
                    })
                }
            }))
        }
    });
}

exports.removerAluno = (req, res) => {
    let id_aluno = req.params.id;

    alunosModel.remove({
        _id: id_aluno
    }, (err) => {
        if(err){
            res.json({
                status: "erro",
                message: "Houve um erro ao deletar o aluno"
            });
        }else{
            res.json({
                status: "ok",
                message: `Aluno deletado com sucesso!`
            })
        }
    });
}