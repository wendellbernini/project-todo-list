import { renderTarefas } from "../tasks/renderTasks";
import { getTarefas, removerTarefa } from "../tasks/taskManager";

function removerTarefaDOM() {
  const caixaListaTarefas = document.querySelector("#divDeTarefas");
  caixaListaTarefas.addEventListener("click", () => {
    const tarefaElemento = event.target.closest(".tarefa-item");
    if (tarefaElemento) {
      tarefaElemento.remove();
      removerTarefa();
      console.log(getTarefas());
    }
  });
}

export { removerTarefaDOM };
