import { renderTarefas } from "../tasks/renderTasks";
import { getTarefas } from "../tasks/taskManager";

function adicionarTarefaDOM() {
  const botaoAdicionarTarefa = document.querySelector("#botaoAbrirModal"); //temporariamente ta no de abrir modal
  botaoAdicionarTarefa.addEventListener("click", () => {
    const tarefas = getTarefas();
    renderTarefas(tarefas);
  });
}

function removerTarefaDOM() {
  const caixaListaTarefas = document.querySelector("#caixaDeTarefas");
  caixaListaTarefas.addEventListener("click", () => {
    const tarefaElemento = event.target.closest(".tarefa-item");
    if (tarefaElemento) {
      tarefaElemento.remove(); // Remove a tarefa do DOM
    }
  });
}

function coletarInputs() {
  const caixaInputs = document.querySelector(".caixaModal");
  if (!caixaInputs) {
    console.log("Caixa inputs nao encontrada");
  } else {
    console.log(caixaInputs);
  }
}

export { adicionarTarefaDOM, removerTarefaDOM, coletarInputs };
