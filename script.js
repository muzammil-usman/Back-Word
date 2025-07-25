var main = document.getElementById("main");
var mainCont = document.getElementById("mainCont");
var heroSection = document.getElementById("hero");

function LoginFormFiller(e) {
  e.preventDefault();
  console.log(email.value);
  console.log(Password.value);
}

var LoginBtn = document.getElementsByClassName("login");

var loginer = () => {
  main.classList.replace("main", "newMain");
  mainCont.remove();
  form.style.display = "flex";
  console.log("all set");
};

var form = document.getElementById("loginForm");
var email = document.getElementById("email");
var Password = document.getElementById("password");
