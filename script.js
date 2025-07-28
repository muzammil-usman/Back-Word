var main = document.getElementById("main");
var mainCont = document.getElementById("mainCont");
var heroSection = document.getElementById("hero");

var dropDownOpener = () => {
  let existingDropDown = document.querySelector(".dropdown");

  if (existingDropDown) {
    existingDropDown.remove();
  } else {
    let dropDown = document.createElement("div");
    dropDown.setAttribute("class", "dropdown");
    dropDown.innerHTML = `<a href="">Home</a><a href="">Categories</a> <a href="">Why choose us</a> <a href="">Contact</a>`;

    let main = document.getElementById("mainCont");
    main.appendChild(dropDown);
  }
};

function LoginFormFiller(e) {
  e.preventDefault();
  if (!email.value || !Password.value) {
    alert("details tou daal seraiki");
    return;
  }
  console.log(email.value);
  console.log(Password.value);
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

var loginForm = document.getElementById("loginForm");
var signUpForm = document.getElementById("signUpForm");
var crossBtn = document.getElementById("cross");
var email = document.getElementById("email");
var Password = document.getElementById("password");
