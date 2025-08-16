import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user andar hey ", uid);
    window.location.replace("./Feed/feed.html");
  } else {
    console.log("user andar nahi hey");
    if (location.pathname !== "/index.html") {
      window.location.replace("index.html");
    }
  }
});

// Declaration of grandfather and father variables
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
            <button class="login" id="dropDownLogin" >Login</button>
            <button class="signup" id="dropDownSignUp">Sign Up</button>

    `;

    let main = document.getElementById("mainCont");
    main.appendChild(dropDown);

    var dropDownLoginBtn = document.querySelector("#dropDownLogin");

    dropDownLoginBtn.addEventListener("click", function (event) {
      loginer(event);
    });

    var dropDownSignUpBtn = document.getElementById("dropDownSignUp");
    dropDownSignUpBtn.addEventListener("click", function (event) {
      SignUper(event);
    });
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
  if (signUpPassword.value.length < 6) {
    alert("Weak Password ! Password should be greater than 6 digits");
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
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    })
    .then(
      ((Uname.value = ""),
      (email.value = ""),
      (signUpPassword.value = ""),
      (confirmPw.value = ""),
      (username.value = ""),
      (dob.value = ""))
    );
};

var signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", function (event) {
  signUpFormFiller(event);
});

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPw");

function LoginFormFiller(e) {
  e.preventDefault();
  if (!loginEmail.value || !loginPassword.value) {
    alert("Please fill below fields");
    return;
  }

  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("login hogaya", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error aagaya", errorMessage);
    });

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
};

var loginCrossBtn = document.getElementById("cross");
loginCrossBtn.addEventListener("click", function (event) {
  loginCrosser(event);
});

var signUpCrosser = () => {
  main.classList.remove("newMain");
  main.appendChild(mainCont);
  signUpForm.style.display = "none";
};

var signUpCrossBtn = document.getElementById("signUpCrossBtn");
signUpCrossBtn.addEventListener("click", function () {
  signUpCrosser();
});

var createAccount = document.getElementById("createAccount");
createAccount.addEventListener("click", function (event) {
  SignUper(event);
});

var shuffler = () => {
  signUpForm.style.display = "none";
};

var alreadyMember = document.getElementById("alreadyMember");
alreadyMember.addEventListener("click", function (event) {
  loginer(event);
});

var shuffler2 = () => {
  loginForm.style.display = "none";
};
alreadyMember.addEventListener("click", function () {
  shuffler();
});

createAccount.addEventListener("click", function () {
  shuffler2();
});

var loginForm = document.getElementById("loginForm");
var signUpForm = document.getElementById("signUpForm");
