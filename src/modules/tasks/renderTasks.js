const renderTarefas = (tarefas) => {
  const caixaListaTarefas = document.querySelector("#divDeTarefas");
  caixaListaTarefas.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const caixaDeTarefa = document.createElement("div");
    caixaDeTarefa.innerHTML = `<h3>${tarefa.titulo}</h3
    ><p>${tarefa.descricao}</p>
    <button id=${tarefa.id}>Deletar</button>`;
    caixaDeTarefa.classList.add("tarefa-item");
    caixaListaTarefas.appendChild(caixaDeTarefa);
  });
};

export { renderTarefas };
