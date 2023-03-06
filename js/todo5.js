const toDoForm5 = document.getElementById("input5");
const toDoInput5 = toDoForm5.querySelector("input");
const toDoList5 = document.querySelector("#list5");

const TODOS_KEY5 = "todos5";

let toDos5 = [];

function saveToDos5() {
  localStorage.setItem(TODOS_KEY5, JSON.stringify(toDos5));
}

function deleteToDo5(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos5 = toDos5.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos5();
}

function paintToDo5(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.style.border = "none";
  button.style.background = "transparent";
  button.addEventListener("click", deleteToDo5);
  li.appendChild(span);
  li.appendChild(button);
  toDoList5.appendChild(li);
}

function handleToDoSubmit5(event) {
  event.preventDefault();
  const newTodo5 = toDoInput5.value;
  toDoInput5.value = "";
  const newTodoObj5 = {
    text: newTodo5,
    id: Date.now(),
  };
  toDos5.push(newTodoObj5);
  paintToDo5(newTodoObj5);
  saveToDos5();
}

toDoForm5.addEventListener("submit", handleToDoSubmit5);

const savedToDos5 = localStorage.getItem(TODOS_KEY5);

if (savedToDos5 !== null) {
  const parsedToDos5 = JSON.parse(savedToDos5);
  toDos5 = parsedToDos5;
  parsedToDos5.forEach(paintToDo5);
}
