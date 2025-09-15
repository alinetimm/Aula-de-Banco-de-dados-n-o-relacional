const express = require('express');
const connectDB = require('./config/db');
const tarefaRoutes = require('./routes/tarefas'); // Importa o arquivo de rotas

const app = express();
connectDB();
app.use(express.json());
app.use(express.static('public'));
app.use('/api/tarefas', tarefaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));