import { auth, onAuthStateChanged, signOut } from "../firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user andar hey ", uid);
    if (location.pathname !== "../Feed/feed.html") {
    } else {
      window.location.replace("../Feed/feed.html");
    }
  } else {
    console.log("user andar nahi hey");
    // if (location.pathname !== "/index.html") {
    window.location.replace("../../index.html");
    // }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".searchBar");
  const searchIcon = document.querySelector(".fa-magnifying-glass");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("active");

    const input = searchBar.querySelector("#search");
    if (searchBar.classList.contains("active")) {
      input.focus();
    } else {
      input.blur();
    }
  });
});

function signOuter() {
  Swal.fire({
    icon: "success",
    title: "Logged Out",
    text: "You're Successfully log out",
    confirmButtonColor: "#2686f7",
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      signOut(auth)
        .then(() => {
          console.log("User signed out");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    }
  });
}

// Button bind
document.addEventListener("DOMContentLoaded", () => {
  const powerBtn =
    document.getElementById("powerBtn") || document.getElementById("logText");
  if (powerBtn) {
    powerBtn.addEventListener("click", signOuter);
  }
});
