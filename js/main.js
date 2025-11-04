import {
  createWhyUsSection,
  createLoginSignUpForm,
  contactSectionLocalStorage,
  createHamburgerButton,
} from "./render.js";

document.addEventListener("DOMContentLoaded", async () => {
  // tüm sayfalar için gerekli kodlar buraya gelecek

  if (window.location.pathname.includes("home")) {
    // home sayfasında render olacak kodlar buraya gelecek
    createHamburgerButton();
    createWhyUsSection();
  } else if (window.location.pathname.includes("login")) {
    // login sayfasında render olacak kodlar buraya gelecek
    createLoginSignUpForm("login");
  } else if (window.location.pathname.includes("signup")) {
    // signUp sayfasında render olacak kodlar buraya gelecek
    createLoginSignUpForm("signup");
  } else if (window.location.pathname.includes("pricing")) {
    // pricing sayfasında render olacak kodlar buraya gelecek
    createHamburgerButton();
    contactSectionLocalStorage();
  } else if (window.location.pathname.includes("blog")) {
    // blog sayfasında render olacak kodlar buraya gelecek
    createHamburgerButton();
  } else if (window.location.pathname.includes("services")) {
    // services sayfasında render olacak kodlar buraya gelecek
    createHamburgerButton();
    contactSectionLocalStorage();
  }
});
