const form = document.querySelector("#get-username");
const input = form.querySelector("input");
const userName = document.querySelector("h2#username");

const HIDDENCLASS = "hidden";

function getUserName(event) {
  event.preventDefault();
  form.classList.add(HIDDENCLASS);
  const newUserName = input.value;

  showUserName(newUserName);
  localStorage.setItem("username", newUserName);

  const todoForm = document.querySelector("#get-todo");
  todoForm.classList.remove(HIDDENCLASS);
}

function showUserName(nowUserName) {
  userName.classList.remove(HIDDENCLASS);
  userName.innerText = `Welcome, ${nowUserName}!`;
}

function whatToDO() {
  const localUserName = localStorage.getItem("username");
  if (localUserName === null || localUserName === "") {
    form.classList.remove(HIDDENCLASS);
  } else {
    showUserName(localUserName);
  }
}
whatToDO();
form.addEventListener("submit", getUserName);
