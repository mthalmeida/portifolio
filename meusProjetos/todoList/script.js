const textoTarefaInput = document.getElementById('texto-tarefa');
const criarTarefaButton = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTudoButton = document.getElementById('apaga-tudo');
const removerFinalizadasButton = document.getElementById('remover-finalizados');
const storage = localStorage;
const salvarTarefasButton = document.getElementById('salvar-tarefas');
const removerSelecionadoButton = document.getElementById('remover-selecionado');
const moverCimaButton = document.getElementById('mover-cima');
const moverBaixoButton = document.getElementById('mover-baixo');

function selectTask(event) {
  const tasks = document.getElementsByClassName('task');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected')) {
      tasks[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function completeTask(event) {
  const task = event.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function addTask() {
  const newTask = document.createElement('li');
  newTask.innerText = textoTarefaInput.value;
  newTask.classList.add('task');
  textoTarefaInput.value = '';
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', completeTask);
  listaTarefas.appendChild(newTask);
}

function limpaTudo() {
  const tasks = document.getElementsByClassName('task');
  for (let i = 0; i < tasks.length; i += 0) {
    const task = tasks[i];
    task.parentNode.removeChild(task);
  }
}

function limpaFinalizadas() {
  const tasks = document.getElementsByClassName('completed');
  for (let i = 0; i < tasks.length; i += 0) {
    const task = tasks[i];
    task.parentNode.removeChild(task);
  }
}

function removerSelecionado() {
  const selected = document.querySelector('.selected');
  selected.parentNode.removeChild(selected);
}

function moveCima() {
  const selected = document.querySelector('.selected');
  if (selected !== listaTarefas.firstChild && selected !== null) {
    listaTarefas.insertBefore(selected, selected.previousSibling);
  }
}

function moveBaixo() {
  let selected = document.querySelector('.selected');
  if (selected !== listaTarefas.lastChild && selected !== null) {
    selected = selected.nextSibling;
    listaTarefas.insertBefore(selected, selected.previousSibling);
  }
}

function salvarTarefas() {
  const tasks = listaTarefas.innerHTML;
  storage.setItem('tasks', tasks);
}

function carregarTarefas() {
  const tasks = storage.getItem('tasks');
  listaTarefas.innerHTML = tasks;
}

function restaurarComportamento() {
  const tasks = document.getElementsByClassName('task');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    task.addEventListener('click', selectTask);
    task.addEventListener('dblclick', completeTask);
  }
}

function loadState() {
  carregarTarefas();
  restaurarComportamento();
}

document.addEventListener('keydown', function (e) {
  if (e.key == "Enter") {
    document.getElementById('criar-tarefa').click();
  }
});

window.onload = loadState;
criarTarefaButton.addEventListener('click', addTask);
apagaTudoButton.addEventListener('click', limpaTudo);
removerFinalizadasButton.addEventListener('click', limpaFinalizadas);
salvarTarefasButton.addEventListener('click', salvarTarefas);
moverCimaButton.addEventListener('click', moveCima);
moverBaixoButton.addEventListener('click', moveBaixo);
removerSelecionadoButton.addEventListener('click', removerSelecionado);
