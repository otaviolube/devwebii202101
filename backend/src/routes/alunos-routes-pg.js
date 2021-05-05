let router = require('express').Router();

const alunosControllerPg = require('../controllers/alunos-controller-pg');

router.post('/', alunosControllerPg.adicionarAlunoPg);

router.get('/', alunosControllerPg.listarAlunosPg);

router.get('/:id', alunosControllerPg.listarAlunoPorIDPg);

router.put('/:id', alunosControllerPg.atualizarAlunoPg);

router.delete('/:id', alunosControllerPg.removerAlunoPg);

module.exports = router;