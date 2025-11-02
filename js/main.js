import { createWhyUsSection, createLoginSignUpForm } from "./render.js";

document.addEventListener("DOMContentLoaded", async () => {
  // tüm sayfalar için gerekli kodlar buraya gelecek
  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-menu");
  // hamburger.addEventListener("click", () => {
  //   navMenu.classList.toggle("active");
  // });
  if (window.location.pathname.includes("home")) {
    // home sayfasında render olacak kodlar buraya gelecek
    createWhyUsSection();
  } else if (window.location.pathname.includes("login")) {
    // login sayfasında render olacak kodlar buraya gelecek
    // Remember Me Butonu
    // JavaScript Kodu
    createLoginSignUpForm("login");
    const switchElement = document.getElementById("benimSwitch");
    const durumMetni = document.getElementById("durum-metni");

    // Switch'in durumu her değiştiğinde bu fonksiyon çalışır
    switchElement.addEventListener("change", function () {
      if (this.checked) {
        // Eğer switch "açık" (checked) ise
        durumMetni.textContent = "Durum: Açık";
        console.log("Switch açıldı");
      } else {
        // Eğer switch "kapalı" (unchecked) ise
        durumMetni.textContent = "Durum: Kapalı";
        console.log("Switch kapandı");
      }
    });
  } else if (window.location.pathname.includes("signup")) {
    // JavaScript Kodu
    createLoginSignUpForm("signup");
    const switchElement = document.getElementById("benimSwitch");
    const durumMetni = document.getElementById("durum-metni");

    // Switch'in durumu her değiştiğinde bu fonksiyon çalışır
    switchElement.addEventListener("change", function () {
      if (this.checked) {
        // Eğer switch "açık" (checked) ise
        durumMetni.textContent = "Durum: Açık";
        console.log("Switch açıldı");
      } else {
        // Eğer switch "kapalı" (unchecked) ise
        durumMetni.textContent = "Durum: Kapalı";
        console.log("Switch kapandı");
      }
    });
    // Remember Me Butonu

    // signUp sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("pricing")) {
    // pricing sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("blog")) {
    // blog sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("services")) {
    // services sayfasında render olacak kodlar buraya gelecek
  }
});
