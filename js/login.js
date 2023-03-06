//로그인
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const userName = document.querySelector("#username");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "user";
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginButton.addEventListener("click", onLoginBtnClick);
} else {
  userName.classList.remove("hidden");
  paintGreetings(savedUsername);
}

function paintGreetings(username) {
  userName.innerText = savedUsername;
  userName.classList.remove("hidden");
}

function onLoginBtnClick(event) {
  //event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings(username);
}
loginButton.addEventListener("click", onLoginBtnClick);
