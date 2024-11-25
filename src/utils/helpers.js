import { getTarefas } from "../modules/tasks/taskManager";

function exibirTarefasAtivas() {
  const qntTarefasAtivas = document.querySelector("#qntTarefasAtivas");
  qntTarefasAtivas.innerHTML = `${getTarefas().length} tarefas`;
}

export { exibirTarefasAtivas };
