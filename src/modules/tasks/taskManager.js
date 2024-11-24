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

function removerTarefa(index) {
  tarefas.splice(index, 1);
}

const getTarefas = () => tarefas;

export { getTarefas, adicionarTarefa, removerTarefa };
