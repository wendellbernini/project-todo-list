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

      // Remove o elemento do DOM (lista principal)
      const tarefaElemento = event.target.closest(".tarefa-item");
      if (tarefaElemento) {
        tarefaElemento.remove();
      }

      // Remover a tarefa também da div de projetos
      const tarefas = getTarefas(); // Obtem as tarefas atualizadas

      // Percorre as divs de projetos (Casa, Trabalho, Estudos, Lazer)
      ["Casa", "Trabalho", "Estudos", "Lazer"].forEach((projeto) => {
        const divProjeto = document.querySelector(`#div${projeto}`);
        if (divProjeto) {
          // Localiza o item com o ID da tarefa na div do projeto
          const tarefaProjeto = divProjeto.querySelector(`[data-id="${id}"]`);
          if (tarefaProjeto) {
            tarefaProjeto.remove(); // Remove a tarefa da div do projeto
          }
        }
      });

      // Atualiza a renderização das tarefas
      renderTarefas(tarefas);

      // Atualiza a contagem de tarefas ou outras ações
      exibirTarefasAtivas();

      console.log(getTarefas());
    }
  });
}

export { removerTarefaDOM };
