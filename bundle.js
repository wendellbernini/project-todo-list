(()=>{"use strict";const e=[];function t({titulo:t,descricao:i,prioridade:d,data:r}){const o={id:Date.now(),titulo:t,descricao:i,prioridade:d,data:r,concluida:!1};return e.push(o),o}const i=()=>e;function d(){document.querySelector("#qntTarefasAtivas").innerHTML=`${i().length} tarefas`}let r=null;function o(){const e=document.querySelector("#inputTitulo"),t=document.querySelector("#inputDescricao"),i=(document.querySelector("#inputPrioridade"),document.querySelector("#inputData")),d={titulo:e.value,descricao:t.value,prioridade:r,data:i.value};return console.log(d.prioridade),d}document.querySelector("#root").innerHTML='\n    <button id="botaoAbrirModal">Abrir modal de adicionar tarefa</button>\n    <div>//modal de adicionar tarefa//</div>\n    <h1>Hoje</h1>\n    <p id="qntTarefasAtivas">"X" tarefas ativas</p>\n    <div id="divDeTarefas">//div de tarefas//</div>\n    ',console.log(i()),document.querySelector("#divDeTarefas").addEventListener("click",(t=>{if("BUTTON"===t.target.tagName&&t.target.hasAttribute("data-id")){!function(t){const i=e.findIndex((e=>e.id===t));-1!==i&&e.splice(i,1)}(Number(t.target.getAttribute("data-id")));const r=t.target.closest(".tarefa-item");r&&r.remove(),d(),console.log(i())}})),document.querySelector("#botaoAbrirModal").addEventListener("click",(()=>{document.querySelector(".caixaModal")||((()=>{const e=document.createElement("div"),r=document.querySelector("#divDeTarefas");e.classList.add("caixaModal"),e.innerHTML=' <input type="text" id="inputTitulo" placeholder="titulo"></br>\n                            <input type="text" id="inputDescricao" placeholder="descricao"></br>\n                            <input type="button" id="inputPrioridade" placeholder="prioridade" value="prioridades"></br>\n                            <input type="date" id="inputData" placeholder="data"></br>\n                            <button id="botaoEnviar">enviar</button>\n                            ',r.appendChild(e),o(),document.querySelector("#botaoEnviar").addEventListener("click",(()=>{t(o()),d();const e=i();(e=>{const t=document.querySelector("#divDeTarefas");t.innerHTML="",e.forEach((e=>{const i=document.createElement("div");i.innerHTML=`<h3>${e.titulo}</h3>\n    <p>${e.descricao}</p>\n    <p>${e.prioridade}</p>\n    <p>${e.data}</p>\n    <button data-id=${e.id}>Deletar</button>`,i.classList.add("tarefa-item"),t.appendChild(i)}))})(e),console.log(e)}))})(),document.querySelector("#inputPrioridade").addEventListener("click",(()=>{const e=document.querySelector(".divModalPrioridades");e?e.remove():(function(){const e=document.querySelector("#divDeTarefas"),t=document.createElement("div");t.classList.add("divModalPrioridades"),t.innerHTML='<input type="button" id="inputPrioridade1" value="prioridade 1"></br>\n  <input type="button" id="inputPrioridade2" value="prioridade 2"></br>\n  <input type="button" id="inputPrioridade3" value="prioridade 3"></br>\n  <input type="button" id="inputPrioridade4" value="prioridade 4"></br>\n',e.appendChild(t)}(),function(){const e=document.querySelector("#divDeTarefas"),t=document.querySelector("#inputPrioridade");e.addEventListener("click",(e=>{const i=e.target,d=document.querySelector(".divModalPrioridades");"inputPrioridade1"===i.id?(r="prioridade 1",t.value="p1",d&&d.remove(),console.log("Prioridade 1 selecionada")):"inputPrioridade2"===i.id?(r="prioridade 2",t.value="p2",d&&d.remove(),console.log("Prioridade 2 selecionada")):"inputPrioridade3"===i.id?(r="prioridade 3",t.value="p3",d&&d.remove(),console.log("Prioridade 3 selecionada")):"inputPrioridade4"===i.id&&(r="prioridade 4",t.value="p4",d&&d.remove(),console.log("Prioridade 4 selecionada"))}))}())})))})),d()})();
//# sourceMappingURL=bundle.js.map