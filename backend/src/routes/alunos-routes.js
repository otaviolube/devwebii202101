let router = require('express').Router();

const alunosController = require('../controllers/alunos-controller');

router.post('/', alunosController.adicionarAluno);

router.get('/', alunosController.listarAlunos);

router.get('/:id', alunosController.listarAlunoPorID);

router.put('/:id', alunosController.atualizarAluno);

router.delete('/:id', alunosController.removerAluno);

module.exports = router;