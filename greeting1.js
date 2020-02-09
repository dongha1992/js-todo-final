const userForm = document.querySelector(".user-form");
const greeting = document.querySelector(".greeting-form");
const userInput = document.querySelector("input");

const USER_LS = "user_LS";
const SHOWING = "showing";

function saveUser(text) {
  localStorage.setItem(USER_LS, text);
}
function paintGreeting(text) {
  userForm.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerText = `hello! ${text}`;
}

function handleSubmitGreeting(e) {
  e.preventDefault();
  const user = userInput.value;

  paintGreeting(user);
  saveUser(user);
}
function askUser() {
  userForm.classList.add(SHOWING);
  userForm.addEventListener("submit", handleSubmitGreeting);
}

function loadUser() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askUser();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadUser();
}

init();
