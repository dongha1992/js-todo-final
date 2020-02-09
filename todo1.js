const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const ul = document.querySelector(".todo-list");

const TODO_LS = "todo-List";
let toDos = [];
function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  ul.removeChild(li);
  const completeToDo = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = completeToDo;
  saveToDo();
}
function paintingToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  span.innerText = text;
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  ul.appendChild(li);
  li.id = newId;
  const toDoObj = {
    text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDo();
}

function handleSubmitToDo(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;

  paintingToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedTodo = localStorage.getItem(TODO_LS);
  if (loadToDo !== null) {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmitToDo);
}

init();
