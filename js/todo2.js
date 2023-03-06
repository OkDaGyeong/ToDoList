const toDoForm2 = document.getElementById("input2");
const toDoInput2 = toDoForm2.querySelector("input");
const toDoList2 = document.querySelector("#list2");

const TODOS_KEY2 = "todos2";

let toDos2 = [];

function saveToDos2() {
  localStorage.setItem(TODOS_KEY2, JSON.stringify(toDos2));
}

function deleteToDo2(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos2 = toDos2.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos2();
}

function paintToDo2(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.style.border = "none";
  button.style.background = "transparent";
  button.addEventListener("click", deleteToDo2);
  li.appendChild(span);
  li.appendChild(button);
  toDoList2.appendChild(li);
}

function handleToDoSubmit2(event) {
  event.preventDefault();
  const newTodo2 = toDoInput2.value;
  toDoInput2.value = "";
  const newTodoObj2 = {
    text: newTodo2,
    id: Date.now(),
  };
  toDos2.push(newTodoObj2);
  paintToDo2(newTodoObj2);
  saveToDos2();
}

toDoForm2.addEventListener("submit", handleToDoSubmit2);

const savedToDos2 = localStorage.getItem(TODOS_KEY2);

if (savedToDos2 !== null) {
  const parsedToDos2 = JSON.parse(savedToDos2);
  toDos2 = parsedToDos2;
  parsedToDos2.forEach(paintToDo2);
}
