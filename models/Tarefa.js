const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'O título da tarefa é obrigatório.'], 
    trim: true 
  },
  descricao: {
    type: String,
    required: false 
  },
  concluida: {
    type: Boolean,
    default: false 
  },
  dataCriacao: {
    type: Date,
    default: Date.now 
  }
});
module.exports = mongoose.model('Tarefa', TarefaSchema);