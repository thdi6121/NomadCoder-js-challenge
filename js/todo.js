const todoList = document.querySelector("ul#todo");
const todoForm = document.querySelector("#get-todo");
const todoInput = todoForm.querySelector("input");
let localTodoList = [];

const TODOKEY = "todos";

function getTodo(event) {
  event.preventDefault();
  newTodoInput = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodoInput,
    id: Date.now(),
  };
  makeTodoElement(newTodoObj);
  localTodoList.push(newTodoObj);
  saveTodoAtLocal();
}

function makeTodoElement(newTodo) {
  const newTodoli = document.createElement("li");
  const newTodoInfo = document.createElement("span");
  const deleteTodoButton = document.createElement("button");

  newTodoli.id = newTodo.id;
  newTodoli.append(newTodoInfo, deleteTodoButton);
  newTodoInfo.innerText = `${newTodo.text}`;
  deleteTodoButton.innerText = "❌";
  deleteTodoButton.addEventListener("click", deleteTodo);
  todoList.appendChild(newTodoli);
}

function deleteTodo(event) {
  const liToDelete = event.target.parentElement;
  localTodoList = localTodoList.filter(
    (todo) => todo.id !== parseInt(liToDelete.id)
  );
  saveTodoAtLocal();
  liToDelete.remove();
}

function saveTodoAtLocal() {
  localStorage.setItem(TODOKEY, JSON.stringify(localTodoList));
}

function showTodoList() {
  const savedTodoList = localStorage.getItem(TODOKEY);
  const parsedList = JSON.parse(savedTodoList);
  localTodoList = parsedList;
  parsedList.forEach(makeTodoElement);
}

function showTodoOrNot() {
  const userName = localStorage.getItem("username");
  if (userName !== null && userName !== "") {
    todoForm.classList.remove("hidden");
    showTodoList();
  }
}

showTodoOrNot();
todoForm.addEventListener("submit", getTodo);
