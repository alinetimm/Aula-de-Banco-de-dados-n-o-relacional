const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'O título da tarefa é obrigatório.'], // Campo obrigatório
    trim: true // Remove espaços em branco do início e do fim do título
  },
  descricao: {
    type: String,
    required: false // Campo não obrigatório
  },
  concluida: {
    type: Boolean,
    default: false // Se não for informado, o valor padrão será 'false'
  },
  dataCriacao: {
    type: Date,
    default: Date.now // O valor padrão é a data/hora do momento da criação
  }
});
module.exports = mongoose.model('Tarefa', TarefaSchema);