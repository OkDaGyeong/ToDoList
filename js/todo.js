//할일 입력
const toDoForm = document.getElementById("input1");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#list1");
let ToDos = [];

function saveToDo() {
  localStorage.setItem("ToDos", ToDos);
}
function delToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.style.border = "none";
  button.style.background = "transparent";
  button.addEventListener("click", delToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newValue = toDoInput.value;
  toDoInput.value = "";
  ToDos.push(newValue);
  paintToDo(newValue);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const TODOS_KEY = "todos";
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
