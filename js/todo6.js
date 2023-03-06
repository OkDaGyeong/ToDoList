const toDoForm6 = document.getElementById("input6");
const toDoInput6 = toDoForm6.querySelector("input");
const toDoList6 = document.querySelector("#list6");

const TODOS_KEY6 = "todos6";

let toDos6 = [];

function saveToDos6() {
  localStorage.setItem(TODOS_KEY6, JSON.stringify(toDos6));
}

function deleteToDo6(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos6 = toDos6.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos6();
}

function paintToDo6(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.style.border = "none";
  button.style.background = "transparent";
  button.addEventListener("click", deleteToDo6);
  li.appendChild(span);
  li.appendChild(button);
  toDoList6.appendChild(li);
}

function handleToDoSubmit6(event) {
  event.preventDefault();
  const newTodo6 = toDoInput6.value;
  toDoInput6.value = "";
  const newTodoObj6 = {
    text: newTodo6,
    id: Date.now(),
  };
  toDos6.push(newTodoObj6);
  paintToDo6(newTodoObj6);
  saveToDos6();
}

toDoForm6.addEventListener("submit", handleToDoSubmit6);

const savedToDos6 = localStorage.getItem(TODOS_KEY6);

if (savedToDos6 !== null) {
  const parsedToDos6 = JSON.parse(savedToDos6);
  toDos6 = parsedToDos6;
  parsedToDos6.forEach(paintToDo6);
}
