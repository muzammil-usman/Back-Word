import { auth, signOut, onAuthStateChanged } from "../firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user andar hey ", uid);
    console.log("user andar hey ", user);
    if (location.pathname !== "../Feed/feed.html") {
    } else {
      window.location.replace("../Feed/feed.html");
    }
  } else {
    console.log("user andar nahi hey");
    window.location.replace("/Back-Word/");
    // window.location.replace("/index.html");
  }
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

document.addEventListener("DOMContentLoaded", () => {
  const powerBtn = document.getElementById("logOutBtn");
  if (powerBtn) {
    powerBtn.addEventListener("click", signOuter);
  }
});
