const renderHomePage = () => {
  const root = document.querySelector("#root");
  root.innerHTML = `
    <button id="botaoAbrirModal">Abrir modal de adicionar tarefa</button>
    <h1 id="hoje">Hoje</h1>
    <p id="qntTarefasAtivas">"X" tarefas ativas</p>
    <div id="divDeTarefas">//tarefas ativas//</div>
    <div id="divDeTarefasInativas">//tarefas inativas//</div>
    <div id="divDeProjetos">
      <h3>Meus Projetos</h3>
      <div id="divCasa">
        <h4>Casa</h4>
        <div class="tarefas-projeto"></div> <!-- Contêiner para tarefas -->
      </div>
      <div id="divTrabalho">
        <h4>Trabalho</h4>
        <div class="tarefas-projeto"></div> <!-- Contêiner para tarefas -->
      </div>
      <div id="divEstudos">
        <h4>Estudos</h4>
        <div class="tarefas-projeto"></div> <!-- Contêiner para tarefas -->
      </div>
      <div id="divLazer">
        <h4>Lazer</h4>
        <div class="tarefas-projeto"></div> <!-- Contêiner para tarefas -->
      </div>
    </div>
  `;
};

export { renderHomePage };
