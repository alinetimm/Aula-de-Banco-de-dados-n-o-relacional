const express = require('express');
const router = express.Router();
const {
  criarTarefa,
  listarTarefas,
  atualizarTarefa,
  deletarTarefa
} = require('../controllers/tarefaController');

router.route('/')
  .post(criarTarefa)
  .get(listarTarefas);

router.route('/:id')
  .put(atualizarTarefa)
  .delete(deletarTarefa);

module.exports = router;