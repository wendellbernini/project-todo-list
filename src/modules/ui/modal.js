import { adicionarTarefa, getTarefas } from "../tasks/taskManager";
import { renderTarefas } from "../tasks/renderTasks";
import { exibirTarefasAtivas } from "../../utils/helpers";

const modalCriarInterface = () => {
  const root = document.querySelector("#root");
  const caixaModal = document.createElement("div");
  const divDeTarefas = document.querySelector("#divDeTarefas");
  caixaModal.classList.add("caixaModal");
  caixaModal.innerHTML = ` <input type="text" id="inputTitulo" placeholder="titulo"></br>
                            <input type="text" id="inputDescricao" placeholder="descricao"></br>
                            <input type="text" id="inputPrioridade" placeholder="prioridade"></br>
                            <input type="text" id="inputData" placeholder="data"></br>
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
    prioridade: inputPrioridade.value,
    data: inputData.value,
  };
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
    modalCriarInterface();
  });
}

export {
  modalCriarInterface,
  modalCriarObjetoTarefa,
  modalBotaoEnviar,
  abrirModal,
};
