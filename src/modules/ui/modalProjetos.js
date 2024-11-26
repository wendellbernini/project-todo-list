// Função para criar o modal de projetos
function modalProjetos() {
  const divDeTarefas = document.querySelector("#divDeTarefas");
  const divDeProjetos = document.createElement("div");
  divDeProjetos.classList.add("divModalProjetos");
  divDeProjetos.innerHTML = `
      <input type="button" id="inputCasa" value="Casa"></br>
      <input type="button" id="inputTrabalho" value="Trabalho"></br>
      <input type="button" id="inputEstudos" value="Estudos"></br>
      <input type="button" id="inputLazer" value="Lazer"></br>
    `;

  divDeTarefas.appendChild(divDeProjetos);
  // Agora vamos adicionar o evento diretamente para cada botão
  eventoSelecionarProjeto(); // Corrigido para chamar o evento de projeto
  return divDeProjetos;
}

// Evento de clique para abrir e fechar o modal de projetos
function eventoDeClickProjeto() {
  const inputProjetos = document.querySelector("#inputProjetos");
  inputProjetos.addEventListener("click", () => {
    const divModalProjetos = document.querySelector(".divModalProjetos");

    if (divModalProjetos) {
      // Se o modal já existe, ele será removido (fechando o modal)
      divModalProjetos.remove();
    } else {
      // Caso contrário, cria e exibe o modal
      modalProjetos();
      eventoSelecionarProjeto();
    }
  });
}

let projetoSelecionado = null; // Variável global para armazenar o projeto

// Função para selecionar o projeto
function eventoSelecionarProjeto() {
  const divDeTarefas = document.querySelector("#divDeTarefas");
  const inputProjetos = document.querySelector("#inputProjetos");

  divDeTarefas.addEventListener("click", (event) => {
    const target = event.target;
    const divModalProjetos = document.querySelector(".divModalProjetos");

    if (
      target.id === "inputCasa" ||
      target.id === "inputTrabalho" ||
      target.id === "inputEstudos" ||
      target.id === "inputLazer"
    ) {
      projetoSelecionado = target.value; // Atualiza a variável global
      inputProjetos.value = target.value; // Atualiza diretamente o campo DOM
      console.log(`Projeto selecionado: ${projetoSelecionado}`);

      if (divModalProjetos) {
        divModalProjetos.remove(); // Fecha o modal
      }
    }
  });
}

function getEventoSelecionarProjeto() {
  console.log(`TESTE ${projetoSelecionado}`);
  return projetoSelecionado;
}

export { eventoDeClickProjeto, getEventoSelecionarProjeto };
