import fetchData from "./fetch.js";

document.addEventListener("DOMContentLoaded", async () => {
  // tüm sayfalar için gerekli kodlar buraya gelecek
  // get-started adında ki buton tıklanınca alert
  const button = document.querySelector(".m-right button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Buton Tıklandı");
    });
  }

  if (window.location.pathname.includes("home")) {
    // home sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("login")) {
    // login sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("pricing")) {
    // pricing sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("blog")) {
    // blog sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("services")) {
    // services sayfasında render olacak kodlar buraya gelecek
  }
});
