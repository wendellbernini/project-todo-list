import { renderHomePage } from "./modules/ui/homePage";
renderHomePage();
import {
  adicionarTarefa,
  removerTarefa,
  getTarefas,
} from "./modules/tasks/taskManager";

const tarefa1 = {
  titulo: "lavar louca",
  descricao: "rapido e bem lipa",
  categoria: "Casa",
  data: "11-02-2023",
};

const tarefa2 = {
  titulo: "lavar roupa",
  descricao: "rapido e bem lipa",
  categoria: "Rupas",
  data: "11-02-2023",
};

adicionarTarefa(tarefa1);
adicionarTarefa(tarefa2);
// removerTarefa(0);
console.log(getTarefas());

import {
  adicionarTarefaDOM,
  removerTarefaDOM,
  coletarInputs,
} from "./modules/ui/events";
adicionarTarefaDOM();
removerTarefaDOM();

import { UImodalAdicionarTarefa } from "./modules/ui/modal";
UImodalAdicionarTarefa();
coletarInputs();
