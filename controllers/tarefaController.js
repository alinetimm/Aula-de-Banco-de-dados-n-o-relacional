const Tarefa = require('../models/Tarefa'); 
exports.criarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json({ success: true, data: tarefa });
  } catch (error) {

    res.status(400).json({ success: false, error: error.message });
  }
};
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find(); 
    res.status(200).json({ success: true, count: tarefas.length, data: tarefas });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Erro de Servidor' });
  }
};
exports.atualizarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,   
      runValidators: true 
    });

    if (!tarefa) {
      return res.status(404).json({ success: false, error: 'Tarefa não encontrada' });
    }

    res.status(200).json({ success: true, data: tarefa });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
exports.deletarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);

    if (!tarefa) {
      return res.status(404).json({ success: false, error: 'Tarefa não encontrada' });
    }

    res.status(200).json({ success: true, data: {} }); 
  } catch (error) {
    res.status(500).json({ success: false, error: 'Erro de Servidor' });
  }
};