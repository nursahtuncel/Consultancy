import fetchData from "./fetch.js";

import {
  createWhyUsSection,
  createFeaturesSection,
  createStructureCard,
  createLoginSignUpForm,
  contactSectionLocalStorage,
  createHamburgerButton,
  blogPagination,
} from "./render.js";

document.addEventListener("DOMContentLoaded", async () => {
  // get-started adında ki buton tıklanınca alert
  const button = document.querySelector(".m-right button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Buton Tıklandı");
    });
  }
  if (window.location.pathname.includes("home")) {
    const data = await fetchData("feature-section");
    const dataServices = await fetchData("services-card");
    createWhyUsSection();
    createFeaturesSection(data);
    createHamburgerButton();
    createStructureCard(dataServices);
    
    const faqToggleIconOnly = document.querySelectorAll("#soru-1, #soru-3");
    faqToggleIconOnly.forEach((button) => {
        button.addEventListener("click", () => {
            const icon = button.querySelector(".faq-icon");
            if (icon) {
                icon.classList.toggle("icon-rotated");
            }
        });
    });
    const faqToggleFull = document.querySelector("#soru-2");
    if (faqToggleFull) { 
        faqToggleFull.addEventListener("click", () => {
            const icon = faqToggleFull.querySelector(".faq-icon");
            const answer = faqToggleFull.nextElementSibling;
            
            if (icon) {
                icon.classList.toggle("icon-rotated");
            }
            if (answer) {
                answer.classList.toggle("hidden");
            }
        });
    }
  } else if (window.location.pathname.includes("login")) {
    // login sayfasında render olacak kodlar buraya gelecek
    createLoginSignUpForm("login");
  
  } else if (window.location.pathname.includes("pricing")) {
  
    createHamburgerButton();
    contactSectionLocalStorage();

  } else if (window.location.pathname.includes("signup")) {
    // signUp sayfasında render olacak kodlar buraya gelecek
    createLoginSignUpForm("signup");
  } else if (window.location.pathname.includes("blog")) {
    const data = await fetchData("blog-posts");

    createHamburgerButton();
    blogPagination(data);
    // blog sayfasında render olacak kodlar buraya gelecek
  } else if (window.location.pathname.includes("services")) {
    // services sayfasında render olacak kodlar buraya gelecek
    createHamburgerButton();
    contactSectionLocalStorage();
  }
});
