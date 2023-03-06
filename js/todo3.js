const toDoForm3 = document.getElementById("input3");
const toDoInput3 = toDoForm3.querySelector("input");
const toDoList3 = document.querySelector("#list3");

const TODOS_KEY3 = "todos3";

let toDos3 = [];

function saveToDos3() {
  localStorage.setItem(TODOS_KEY3, JSON.stringify(toDos3));
}

function deleteToDo3(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos3 = toDos3.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos3();
}

function paintToDo3(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.style.border = "none";
  button.style.background = "transparent";
  button.addEventListener("click", deleteToDo3);
  li.appendChild(span);
  li.appendChild(button);
  toDoList3.appendChild(li);
}

function handleToDoSubmit3(event) {
  event.preventDefault();
  const newTodo3 = toDoInput3.value;
  toDoInput3.value = "";
  const newTodoObj3 = {
    text: newTodo3,
    id: Date.now(),
  };
  toDos3.push(newTodoObj3);
  paintToDo3(newTodoObj3);
  saveToDos3();
}

toDoForm3.addEventListener("submit", handleToDoSubmit3);

const savedToDos3 = localStorage.getItem(TODOS_KEY3);

if (savedToDos3 !== null) {
  const parsedToDos3 = JSON.parse(savedToDos3);
  toDos3 = parsedToDos3;
  parsedToDos3.forEach(paintToDo3);
}
