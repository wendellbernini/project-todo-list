import { adicionarTarefa, getTarefas } from "../tasks/taskManager";
import { renderTarefas } from "../tasks/renderTasks";
import { exibirTarefasAtivas } from "../../utils/helpers";
import {
  eventoDeClick,
  getEventoSelecionarPrioridade,
} from "./modalPrioridades";
import {
  eventoDeClickProjeto,
  getEventoSelecionarProjeto,
} from "./modalProjetos";

const modalCriarInterface = () => {
  const caixaModal = document.createElement("div");
  const divDeTarefas = document.querySelector("#divDeTarefas");
  caixaModal.classList.add("caixaModal");
  caixaModal.innerHTML = ` <input type="text" id="inputTitulo" placeholder="Nome da tarefa"></br>
                            <input type="text" id="inputDescricao" placeholder="Descrição"></br>
                            <input type="button" id="inputPrioridade"value="prioridades"></br>
                            <input type="date" id="inputData" placeholder="data"></br>
                            <input type="button" id="inputProjetos"value="projetos"></br>
                            <button id="botaoEnviar">enviar</button>
                            <button id="botaoFechar">cancelar</button>
                            `;
  divDeTarefas.appendChild(caixaModal);
  modalCriarObjetoTarefa();
  modalBotaoEnviar();
};

function modalCriarObjetoTarefa() {
  const inputTitulo = document.querySelector("#inputTitulo");
  const inputDescricao = document.querySelector("#inputDescricao");
  const inputData = document.querySelector("#inputData");
  const inputPrioridade = getEventoSelecionarPrioridade(); // Atualiza a prioridade
  const inputProjetos = getEventoSelecionarProjeto(); // Atualiza o projeto selecionado

  if (!inputProjetos) {
    console.error("Nenhum projeto foi selecionado.");
    return null; // Retorna nulo se o projeto não foi selecionado
  }

  const tarefa = {
    titulo: inputTitulo.value || "Sem título",
    descricao: inputDescricao.value || "Sem descrição",
    prioridade: inputPrioridade || "Sem prioridade",
    data: inputData.value || "Sem data",
    projetos: inputProjetos,
  };

  console.log("Tarefa criada:", tarefa);
  return tarefa;
}

function modalBotaoEnviar() {
  const botaoEnviar = document.querySelector("#botaoEnviar");
  botaoEnviar.addEventListener("click", () => {
    adicionarTarefa(modalCriarObjetoTarefa());
    exibirTarefasAtivas();
    const tarefas = getTarefas();
    renderTarefas(tarefas);
    console.log(tarefas);
  });
}

function abrirModal() {
  const botaoAbrirModal = document.querySelector("#botaoAbrirModal");
  botaoAbrirModal.addEventListener("click", () => {
    const caixaModal = document.querySelector(".caixaModal");
    if (caixaModal) {
      return;
    }
    modalCriarInterface();
    eventoDeClick();
    eventoDeClickProjeto();
    botaofecharModal();
  });
}

function botaofecharModal() {
  const botaoFechar = document.querySelector("#botaoFechar");

  botaoFechar.addEventListener("click", () => {
    const caixaModal = document.querySelector(".caixaModal");
    if (caixaModal) {
      caixaModal.remove();
      return;
    }
  });
}

export {
  modalCriarInterface,
  modalCriarObjetoTarefa,
  modalBotaoEnviar,
  abrirModal,
};
