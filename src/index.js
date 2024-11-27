import { renderHomePage } from "./modules/ui/homePage";
renderHomePage();
import {
  adicionarTarefa,
  removerTarefa,
  getTarefas,
} from "./modules/tasks/taskManager";

// removerTarefa(0);
console.log(getTarefas());

import { removerTarefaDOM } from "./modules/ui/events";
removerTarefaDOM();

import {
  modalCriarInterface,
  modalCriarObjetoTarefa,
  modalBotaoEnviar,
  abrirModal,
} from "./modules/ui/modal";
abrirModal();
import { exibirTarefasAtivas, ver } from "./utils/helpers";
exibirTarefasAtivas();
import "./styles/main.css";
import "./styles/modal.css";
