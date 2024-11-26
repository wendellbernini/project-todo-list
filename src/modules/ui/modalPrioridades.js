function modalPrioridades() {
  const divDeTarefas = document.querySelector("#divDeTarefas");
  const divModalPrioridades = document.createElement("div");
  divModalPrioridades.classList.add("divModalPrioridades");
  divModalPrioridades.innerHTML = `<input type="button" id="inputPrioridade1" value="prioridade 1"></br>
  <input type="button" id="inputPrioridade2" value="prioridade 2"></br>
  <input type="button" id="inputPrioridade3" value="prioridade 3"></br>
  <input type="button" id="inputPrioridade4" value="prioridade 4"></br>
`;

  divDeTarefas.appendChild(divModalPrioridades);
  return divModalPrioridades;
}

function eventoDeClick() {
  const inputPrioridade = document.querySelector("#inputPrioridade");
  inputPrioridade.addEventListener("click", () => {
    const divModalPrioridades = document.querySelector(".divModalPrioridades");

    if (divModalPrioridades) {
      // Se o modal já existe, ele será removido (fechando o modal)
      divModalPrioridades.remove();
    } else {
      // Caso contrário, cria e exibe o modal
      modalPrioridades();
      eventoSelecionarPrioridade();
    }
  });
}

let prioridadeSelecionada = null; // Variável global para armazenar a prioridade

function eventoSelecionarPrioridade() {
  const divDeTarefas = document.querySelector("#divDeTarefas");
  const inputPrioridade = document.querySelector("#inputPrioridade");

  divDeTarefas.addEventListener("click", (event) => {
    const target = event.target;
    const divModalPrioridades = document.querySelector(".divModalPrioridades");

    if (target.id === "inputPrioridade1") {
      prioridadeSelecionada = "prioridade 1";
      inputPrioridade.value = "p1";
      if (divModalPrioridades) {
        divModalPrioridades.remove(); // Remover o modal
      }
      console.log("Prioridade 1 selecionada");
    } else if (target.id === "inputPrioridade2") {
      prioridadeSelecionada = "prioridade 2";
      inputPrioridade.value = "p2";
      if (divModalPrioridades) {
        divModalPrioridades.remove(); // Remover o modal
      }
      console.log("Prioridade 2 selecionada");
    } else if (target.id === "inputPrioridade3") {
      prioridadeSelecionada = "prioridade 3";
      inputPrioridade.value = "p3";
      if (divModalPrioridades) {
        divModalPrioridades.remove(); // Remover o modal
      }
      console.log("Prioridade 3 selecionada");
    } else if (target.id === "inputPrioridade4") {
      prioridadeSelecionada = "prioridade 4";
      inputPrioridade.value = "p4";
      if (divModalPrioridades) {
        divModalPrioridades.remove(); // Remover o modal
      }
      console.log("Prioridade 4 selecionada");
    }
  });
}

function getEventoSelecionarPrioridade() {
  return prioridadeSelecionada;
}

export { eventoDeClick, getEventoSelecionarPrioridade };
