import { auth, onAuthStateChanged } from "../firebase.js";

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
    if (location.pathname !== "/index.html") {
      window.location.replace("/index.html");
    }
  }
});
