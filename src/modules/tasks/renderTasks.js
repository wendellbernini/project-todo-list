const renderTarefas = (tarefas) => {
  const caixaListaTarefas = document.querySelector("#caixaDeTarefas");
  caixaListaTarefas.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const caixaDeTarefa = document.createElement("div");
    caixaDeTarefa.innerHTML = `<h3>${tarefa.titulo}</h3
    ><p>${tarefa.descricao}</p>
    <button id="removerTarefa">Deletar</button>`;
    caixaDeTarefa.classList.add("tarefa-item");
    caixaListaTarefas.appendChild(caixaDeTarefa);
  });
};

export { renderTarefas };
