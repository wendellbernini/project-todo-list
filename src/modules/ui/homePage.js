const renderHomePage = () => {
  const root = document.querySelector("#root");
  root.innerHTML = `
    <button id="botaoAbrirModal">Abrir modal de adicionar tarefa</button>
    <div>//modal de adicionar tarefa//</div>
    <h1>Hoje</h1>
    <p id="qntTarefasAtivas">"X" tarefas ativas</p>
    <div id="caixaDeTarefas">//div de tarefas//</div>
    `;
};

export { renderHomePage };
