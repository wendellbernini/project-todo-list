const tarefas = [];

function adicionarTarefa({ titulo, descricao, prioridade, data }) {
  const novaTarefa = {
    id: Date.now(),
    titulo,
    descricao,
    prioridade,
    data,
    concluida: false,
  };

  tarefas.push(novaTarefa);
  return novaTarefa;
}

function removerTarefa(id) {
  const indice = tarefas.findIndex((tarefa) => tarefa.id === id);
  if (indice !== -1) {
    tarefas.splice(indice, 1); // Remove a tarefa do array
  }
}

const getTarefas = () => tarefas;

export { getTarefas, adicionarTarefa, removerTarefa };
