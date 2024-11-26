import { renderTarefas } from "../tasks/renderTasks";
import { getTarefas, removerTarefa } from "../tasks/taskManager";
import { exibirTarefasAtivas } from "../../utils/helpers";

function removerTarefaDOM() {
  const caixaListaTarefas = document.querySelector("#divDeTarefas");

  caixaListaTarefas.addEventListener("click", (event) => {
    // Verifica se o clique foi no botão "Deletar"
    if (
      event.target.tagName === "BUTTON" &&
      event.target.hasAttribute("data-id")
    ) {
      const id = Number(event.target.getAttribute("data-id"));

      // Remove a tarefa do array
      removerTarefa(id);

      // Remove o elemento do DOM
      const tarefaElemento = event.target.closest(".tarefa-item");
      if (tarefaElemento) {
        tarefaElemento.remove();
      }

      // Atualiza a contagem de tarefas ou outras ações
      exibirTarefasAtivas();
      console.log(getTarefas());
    }
  });
}

export { removerTarefaDOM };
