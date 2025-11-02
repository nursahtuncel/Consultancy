import fetchData from "./fetch.js";

const createWhyUsSection = () => {
  async function renderWhyUs() {
    try {
      const [content, stats] = await Promise.all([
        fetchData("why-us-textContent"),
        fetchData("why-us-stats"),
      ]);

      const whyUsSection = document.querySelector(".why-us-section");
      whyUsSection.innerHTML = `
        <div class="why-us-header">
          <h4 class="why-us-top-header">${content.eyebrow}</h4>
          <h2 class="why-us-bottom-header">${content.heading}</h2>
          <p class="why-us-text">
            ${content.description}
          </p>
        </div>
        <div class="why-us-content"></div>
      `;

      const whyUsStats = document.querySelector(".why-us-content");

      whyUsStats.innerHTML = stats
        .map((item) => {
          return `
      <div class="stat-item">
        <span class="stat-value">${item.value}</span>
        <p class="stat-text">${item.text}</p>
      </div>
    `;
        })
        .join("");
    } catch (err) {
      console.error("JSON verisi yüklenemedi:", err);
    }
  }

  renderWhyUs();
};
const createLoginSignUpForm = (formType) => {
  async function renderForm(formType) {
    // 1. Ayar objesinden doğru parametreleri seç

    const formContent = document.getElementById("formContent");

    const [config] = await Promise.all([fetchData(formType)]);

    // 2. HTML'i oluşturmaya başla
    let html = `
        <h2 class="form-title">${config.title}</h2>
        
        <form id="${formType}-form">
    `;

    // 3. Normal input alanlarını (fields) config'den alıp ekle
    config.fields.forEach((field) => {
      html += `
            <input
                class="field"
                type="${field.type}" 
                placeholder="${field.placeholder}" 
                name="${field.name}" 
            />`;
    });

    // 4. Şifre alanını ve göz ikonunu ekle
    html += `
        <div class="password-wrapper">
            <input 
                type="${config.passwordField.type}" 
                placeholder="${config.passwordField.placeholder}" 
                name="${config.passwordField.name}" 
            />
            <span class="password-toggle-icon" id="togglePassword">
               <img src="/images/login-signup-images/eye-vector-consulty.svg" alt="">            
            </span>
        </div>
    `;

    // 5. "Remember me" ve "Forgot password" bölümünü ekle
    html += `
        <div class="form-options">
            <label>
                <div class="switch-container">
                    <input type="checkbox" class="switch-checkbox" id="benimSwitch">
                    <label class="switch-label" for="benimSwitch"></label>
                 </div>
               <p id="durum-metni">Remember Me</p>
                
            </label>
            <a href="#" class="forgot-link">Forgot password?</a>
        </div>
    `;

    // 6. Ana Butonu (Login/Sign in) ekle
    html += `
        <button type="submit" class="submit-btn">
            ${config.submitText}
        </button>
    `;

    // 7. Formu kapat
    html += `</form>`;

    // 8. "Google ile Giriş" butonunu (ortak) ekle
    html += `
        <button class="google-btn">
           <img src="/images/login-signup-images/google-icon.svg" alt="">
            Or ${config.submitText} with Google
        </button>
    `;

    // 9. Form değiştirme linkini (toggle) ekle
    html += `
        <div class="toggle-link-container">
            ${config.toggleText}
            <a href="#" class="toggle-link" data-target="${config.toggleTarget}">
            
                ${config.toggleLinkText}
            </a>
        </div>
        
    `;
    document.addEventListener("click", (e) => {
      if (e.target.matches(".toggle-link")) {
        e.preventDefault();
        window.location.href =
          "./../" + e.target.dataset.target + "/index.html";
      }
    });
    // 10. Üretilen tüm HTML'i ekrana bas
    formContent.innerHTML = html;
  }
 

  renderForm(formType);
};

export { createWhyUsSection, createLoginSignUpForm };
