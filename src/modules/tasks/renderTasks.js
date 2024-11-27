const renderTarefas = (tarefas) => {
  const caixaListaTarefas = document.querySelector("#divDeTarefas");
  caixaListaTarefas.innerHTML = ""; // Limpa a lista geral

  const projetosValidos = ["Casa", "Trabalho", "Estudos", "Lazer"]; // Lista de projetos

  // Limpa apenas os contêineres de tarefas dentro de cada projeto
  projetosValidos.forEach((projeto) => {
    const divProjeto = document.querySelector(
      `#div${projeto} .tarefas-projeto`
    ); // Seleciona apenas o contêiner
    if (divProjeto) {
      divProjeto.innerHTML = ""; // Limpa as tarefas existentes, mas mantém os títulos
    }
  });

  // Renderiza as tarefas
  tarefas.forEach((tarefa) => {
    // Renderiza na lista geral
    const caixaDeTarefa = document.createElement("div");
    caixaDeTarefa.innerHTML = `
      <h3>${tarefa.titulo}</h3>
      <p>${tarefa.descricao}</p>
      <p>${tarefa.prioridade}</p>
      <p>${tarefa.data}</p>
      <p>${tarefa.projetos}</p>
      <button data-id=${tarefa.id}>Deletar</button>
    `;
    caixaDeTarefa.classList.add("tarefa-item");
    caixaListaTarefas.appendChild(caixaDeTarefa);

    // Renderiza no projeto correspondente
    if (projetosValidos.includes(tarefa.projetos)) {
      const divProjeto = document.querySelector(
        `#div${tarefa.projetos} .tarefas-projeto`
      ); // Seleciona o contêiner de tarefas
      const tarefaProjeto = document.createElement("div");
      tarefaProjeto.setAttribute("data-id", tarefa.id); // Atribui o ID da tarefa
      tarefaProjeto.textContent = tarefa.titulo; // Define o conteúdo como o título da tarefa
      divProjeto.appendChild(tarefaProjeto); // Adiciona à div correspondente
    }
  });
};

export { renderTarefas };
