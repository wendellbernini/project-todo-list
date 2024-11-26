import { adicionarTarefa, getTarefas } from "../tasks/taskManager";
import { renderTarefas } from "../tasks/renderTasks";
import { exibirTarefasAtivas } from "../../utils/helpers";
import {
  eventoDeClick,
  getEventoSelecionarPrioridade,
} from "./modalPrioridades";

const modalCriarInterface = () => {
  const caixaModal = document.createElement("div");
  const divDeTarefas = document.querySelector("#divDeTarefas");
  caixaModal.classList.add("caixaModal");
  caixaModal.innerHTML = ` <input type="text" id="inputTitulo" placeholder="titulo"></br>
                            <input type="text" id="inputDescricao" placeholder="descricao"></br>
                            <input type="button" id="inputPrioridade" placeholder="prioridade" value="prioridades"></br>
                            <input type="date" id="inputData" placeholder="data"></br>
                            <button id="botaoEnviar">enviar</button>
                            `;
  divDeTarefas.appendChild(caixaModal);
  modalCriarObjetoTarefa();
  modalBotaoEnviar();
};

function modalCriarObjetoTarefa() {
  const inputTitulo = document.querySelector("#inputTitulo");
  const inputDescricao = document.querySelector("#inputDescricao");
  const inputPrioridade = document.querySelector("#inputPrioridade");
  const inputData = document.querySelector("#inputData");
  const tarefa = {
    titulo: inputTitulo.value,
    descricao: inputDescricao.value,
    prioridade: getEventoSelecionarPrioridade(),
    data: inputData.value,
  };
  console.log(tarefa.prioridade);
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
  });
}

export {
  modalCriarInterface,
  modalCriarObjetoTarefa,
  modalBotaoEnviar,
  abrirModal,
};
