const formTarefa = document.getElementById('form-tarefa');
const inputTituloTarefa = document.getElementById('titulo-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

const renderizarTarefas = (tarefas) => {
    listaTarefas.innerHTML = '';

    if (tarefas.length === 0) {
        listaTarefas.innerHTML = '<p class="text-slate-500 text-center">Nenhuma tarefa encontrada.</p>';
        return;
    }

    tarefas.forEach(tarefa => {
        const divTarefa = document.createElement('div');
        
        divTarefa.className = `
            flex items-center justify-between bg-slate-800 p-4 rounded-lg shadow-md 
            transition-all duration-300 ${tarefa.concluida ? 'opacity-50' : ''}
        `;
        
        divTarefa.dataset.id = tarefa._id;

        divTarefa.innerHTML = `
            <span class="flex-grow text-lg ${tarefa.concluida ? 'line-through text-slate-500' : ''}">
                ${tarefa.titulo}
            </span>
            <div class="flex items-center gap-3">
                <button data-action="toggle" class="text-2xl">
                    ${tarefa.concluida ? '✅' : '⬜️'}
                </button>
                <button data-action="delete" class="text-red-500 hover:text-red-400 font-bold text-xl">
                    🗑️
                </button>
            </div>
        `;
        
        listaTarefas.appendChild(divTarefa);
    });
};

const buscarTarefas = async () => {
    try {
        const response = await fetch('/api/tarefas');
        const resultado = await response.json();
        if (resultado.success) {
            // Ordena as tarefas: não concluídas primeiro
            const tarefasOrdenadas = resultado.data.sort((a, b) => a.concluida - b.concluida);
            renderizarTarefas(tarefasOrdenadas);
        }
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }
};

const adicionarTarefa = async (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    const titulo = inputTituloTarefa.value.trim();

    if (!titulo) return;

    try {
        const response = await fetch('/api/tarefas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo }),
        });

        if (response.status === 201) {
            inputTituloTarefa.value = ''; 
            buscarTarefas(); 
        }
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
};

const manipularCliqueLista = async (event) => {
    const target = event.target;
    const divTarefa = target.closest('div[data-id]'); // Encontra a div da tarefa pai
    if (!divTarefa) return;

    const idTarefa = divTarefa.dataset.id;
    const acao = target.dataset.action;

    // Ação para deletar a tarefa
    if (acao === 'delete') {
        try {
            const response = await fetch(`/api/tarefas/${idTarefa}`, { method: 'DELETE' });
            if (response.ok) {
                buscarTarefas();
            }
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    }

    if (acao === 'toggle') {
        try {
            // Primeiro, busca o estado atual da tarefa
            const res = await fetch(`/api/tarefas`); // Sim, busca todas, mas é simples
            const { data } = await res.json();
            const tarefaAtual = data.find(t => t._id === idTarefa);

            const response = await fetch(`/api/tarefas/${idTarefa}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ concluida: !tarefaAtual.concluida }),
            });
            if (response.ok) {
                buscarTarefas();
            }
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
        }
    }
};

document.addEventListener('DOMContentLoaded', buscarTarefas); // Busca as tarefas quando a página carrega
formTarefa.addEventListener('submit', adicionarTarefa);
listaTarefas.addEventListener('click', manipularCliqueLista);