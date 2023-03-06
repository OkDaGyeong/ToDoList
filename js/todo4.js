const toDoForm4 = document.getElementById("input4");
const toDoInput4 = toDoForm4.querySelector("input");
const toDoList4 = document.querySelector("#list4");

const TODOS_KEY4 = "todos4";

let toDos4 = [];

function saveToDos4() {
  localStorage.setItem(TODOS_KEY4, JSON.stringify(toDos4));
}

function deleteToDo4(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos4 = toDos4.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos4();
}

function paintToDo4(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.style.border = "none";
  button.style.background = "transparent";
  button.addEventListener("click", deleteToDo4);
  li.appendChild(span);
  li.appendChild(button);
  toDoList4.appendChild(li);
}

function handleToDoSubmit4(event) {
  event.preventDefault();
  const newTodo4 = toDoInput4.value;
  toDoInput4.value = "";
  const newTodoObj4 = {
    text: newTodo4,
    id: Date.now(),
  };
  toDos4.push(newTodoObj4);
  paintToDo4(newTodoObj4);
  saveToDos4();
}

toDoForm4.addEventListener("submit", handleToDoSubmit4);

const savedToDos4 = localStorage.getItem(TODOS_KEY4);

if (savedToDos4 !== null) {
  const parsedToDos4 = JSON.parse(savedToDos4);
  toDos4 = parsedToDos4;
  parsedToDos4.forEach(paintToDo4);
}
