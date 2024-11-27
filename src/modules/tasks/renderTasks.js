const renderTarefas = (tarefas) => {
  const caixaListaTarefas = document.querySelector("#divDeTarefas");
  caixaListaTarefas.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const caixaDeTarefa = document.createElement("div");
    caixaDeTarefa.innerHTML = `<h3>${tarefa.titulo}</h3>
    <p>${tarefa.descricao}</p>
    <p>${tarefa.prioridade}</p>
    <p>${tarefa.data}</p>
    <p>${tarefa.projetos}</p>
    <button data-id=${tarefa.id}>Deletar</button>`;
    caixaDeTarefa.classList.add("tarefa-item");
    console.log(`ESSE: ${tarefa.projetos}`);
    caixaListaTarefas.appendChild(caixaDeTarefa);
  });
};

export { renderTarefas };
