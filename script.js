import { app, auth, createUserWithEmailAndPassword } from "./firebase.js";

// Delclaration of grandfather and father variables
var main = document.getElementById("main");
var mainCont = document.getElementById("mainCont");

var bars = document.getElementById("bars");
bars.addEventListener("click", function () {
  dropDownOpener();
});

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
let email = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPw");
let confirmPw = document.getElementById("confirmPw");
let dob = document.getElementById("DOB");

// This function checks all fields is filled than pass the data to database
var signUpFormFiller = (e) => {
  e.preventDefault();
  function genderChecker() {
    let gender = document.getElementsByName("gender");
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked == true) {
        return gender[i].value;
      }
    }
    return null;
  }

  if (
    !username.value ||
    !email.value ||
    !Uname.value ||
    !signUpPassword.value ||
    !dob.value ||
    !confirmPw.value ||
    !genderChecker()
  ) {
    alert("Something is missing. Please fill all the fields.");
    return;
  }

  if (username.value.length < 6) {
    alert("Username should be at least 6 characters long.");
    return;
  }

  if (signUpPassword.value !== confirmPw.value) {
    alert("Password and Confirm Password do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, signUpPassword.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPw");

function LoginFormFiller(e) {
  e.preventDefault();
  if (!loginEmail.value || !loginPassword.value) {
    alert("Please fill below fields");
    return;
  }
  console.log(loginEmail.value);
  console.log(loginPassword.value);

  loginEmail.value = "";
  loginPassword.value = "";
}

var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
  LoginFormFiller(event);
});

var LoginBtn = document.getElementById("login");
LoginBtn.addEventListener("click", function (event) {
  loginer(event);
});

var loginer = (e) => {
  e.preventDefault();
  main.classList.add("newMain");
  mainCont.remove();
  loginForm.style.display = "flex";
};

var SignUper = (e) => {
  e.preventDefault();
  main.classList.add("newMain");
  mainCont.remove();
  signUpForm.style.display = "flex";
};

var signUpBtn = document.getElementById("signUp");
signUpBtn.addEventListener("click", function (event) {
  SignUper(event);
});

var joinBtn = document.getElementById("joinBtn");
joinBtn.addEventListener("click", function (event) {
  SignUper(event);
});

var anchorTag = document.getElementById("already");
anchorTag.addEventListener("click", function (event) {
  loginer(event);
});

var loginCrosser = () => {
  main.classList.remove("newMain");
  main.appendChild(mainCont);
  loginForm.style.display = "none";
  console.log("all set");
};

var loginCrossBtn = document.getElementById("cross");
loginCrossBtn.addEventListener("click", function (event) {
  loginCrosser(event);
});

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
