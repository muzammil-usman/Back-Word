// Delclaration of grandfather and father variables
var main = document.getElementById("main");
var mainCont = document.getElementById("mainCont");
var heroSection = document.getElementById("hero");

// The function that opens dropdown in mobile devices
var dropDownOpener = () => {
  let existingDropDown = document.querySelector(".dropdown");

  if (existingDropDown) {
    existingDropDown.remove();
  } else {
    let dropDown = document.createElement("div");
    dropDown.setAttribute("class", "dropdown");
    dropDown.innerHTML = `<a href="">Home</a><a href="">Categories</a> <a href="">Why choose us</a> <a href="">Contact</a>
            <button class="login" onclick="loginer(event)" >Login</button>
            <button class="signup" onclick="SignUper(event)">Sign Up</button>

    `;

    let main = document.getElementById("mainCont");
    main.appendChild(dropDown);
  }
};

let Uname = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let signUpPassword = document.getElementById("signUpPw");
let confirmPw = document.getElementById("confirmPw");

// This function checks all fields is filled than pass the data to database
var signUpFormFiller = (e) => {
  e.preventDefault();
  console.log(
    Uname.value,
    username.value,
    email.value,
    signUpPassword.value,
    confirmPw.value
  );
};

var loginEmail = document.getElementById("email");
var loginPassword = document.getElementById("loginPw");

function LoginFormFiller(e) {
  e.preventDefault();
  if (!loginEmail.value || !loginPassword.value) {
    alert("Please fill below fields");
    return;
  }
  console.log(loginEmail.value);
  console.log(loginPassword.value);
}

var LoginBtn = document.getElementsByClassName("login");

var loginer = (e) => {
  e.preventDefault();
  main.classList.add("newMain");
  mainCont.remove();
  loginForm.style.display = "flex";
  console.log("all set");
};

var SignUper = (e) => {
  e.preventDefault();
  main.classList.add("newMain");
  mainCont.remove();
  signUpForm.style.display = "flex";
  console.log("all set");
};

var loginCrosser = () => {
  main.classList.remove("newMain");
  main.appendChild(mainCont);
  loginForm.style.display = "none";
  console.log("all set");
};

var signUpCrosser = () => {
  main.classList.remove("newMain");
  main.appendChild(mainCont);
  signUpForm.style.display = "none";
  console.log("all set");
};

var shuffler = () => {
  signUpForm.style.display = "none";
};

var shuffler2 = () => {
  loginForm.style.display = "none";
};

var loginForm = document.getElementById("loginForm");
var signUpForm = document.getElementById("signUpForm");
var crossBtn = document.getElementById("cross");
