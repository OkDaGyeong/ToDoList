const toDoForm7 = document.getElementById("input7");
const toDoInput7 = toDoForm7.querySelector("input");
const toDoList7 = document.querySelector("#list7");

const TODOS_KEY7 = "todos7";

let toDos7 = [];

function saveToDos7() {
  localStorage.setItem(TODOS_KEY7, JSON.stringify(toDos7));
}

function deleteToDo7(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos7 = toDos7.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos7();
}

function paintToDo7(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.style.border = "none";
  button.style.background = "transparent";
  button.addEventListener("click", deleteToDo7);
  li.appendChild(span);
  li.appendChild(button);
  toDoList7.appendChild(li);
}

function handleToDoSubmit7(event) {
  event.preventDefault();
  const newTodo7 = toDoInput7.value;
  toDoInput7.value = "";
  const newTodoObj7 = {
    text: newTodo7,
    id: Date.now(),
  };
  toDos7.push(newTodoObj7);
  paintToDo7(newTodoObj7);
  saveToDos7();
}

toDoForm7.addEventListener("submit", handleToDoSubmit7);

const savedToDos7 = localStorage.getItem(TODOS_KEY7);

if (savedToDos7 !== null) {
  const parsedToDos7 = JSON.parse(savedToDos7);
  toDos7 = parsedToDos7;
  parsedToDos7.forEach(paintToDo7);
}
