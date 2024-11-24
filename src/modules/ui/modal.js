const UImodalAdicionarTarefa = () => {
  const root = document.querySelector("#root");
  const caixaModal = document.createElement("div");
  caixaModal.classList.add("caixaModal");
  caixaModal.innerHTML = ` <input type="text" id="inputTitulo" placeholder="titulo"></br>
                            <input type="text" id="inputDescricao" placeholder="descricao"></br>
                            <input type="text" id="inputPrioridade" placeholder="prioridade"></br>
                            <input type="text" id="inputData" placeholder="data"></br>
                            <button id="botaoEnviar">enviar</button>
                            `;
  root.appendChild(caixaModal);
};

function modalEventos() {
  const caixaInputs = document.querySelector(".caixaModal");
  if (!caixaInputs) {
    console.log("Caixa inputs nao encontrada");
  } else {
    console.log(caixaInputs);
  }
}

export { UImodalAdicionarTarefa, modalEventos };
