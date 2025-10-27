const whyusSection = document.getElementById("why-us-section");
const whyusHeader = document.getElementById("why-us-header");
const whyUsContent = document.getElementById("why-us-content");

// 'veri.json' dosyasını çek
fetch("../../db.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ağ yanıtı sorunlu: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // 'data' artık bizim güncel JSON nesnemiz

    // === BÖLÜM 1: Metin İçeriğini Yükle (innerHTML ile) ===
    const textContent = data["why-us-textContent"];

    // 1. Başlık bölümünün HTML'ini bir metin olarak hazırla
    // Not: Orijinal kodunda 'anaKapsayici' oluşturuluyor ama içi boş
    // ve diğerleri 'whyusHeader'a kardeş olarak ekleniyor.
    // Aynı yapıyı korumak için böyle yazıyoruz:
    const headerHTML = `
      <div class="whyUs-header"></div>
      <p class="whyUs-alt-baslik">${textContent.eyebrow}</p>
      <h2 class="whyUs-ana-baslik">${textContent.heading}</h2>
      <p class="whyUs-aciklama">${textContent.description}</p>
    `;

    // 2. Hazırlanan HTML'i doğrudan ata
    whyusHeader.innerHTML = headerHTML;

    // === BÖLÜM 2: İstatistikleri Yükle (innerHTML ile) ===

    // 1. 'data.whyUsData' dizisindeki her bir elemanı
    //    bir HTML metnine dönüştürmek için 'map()' kullan.
    const statsItemsHTML = data.whyUsData
      .map((item) => {
        // Her bir item için bu HTML şablonunu döndür
        return `
        <div class="whyUs-stat-item">
          <p class="whyUs-stat-value">${item.value}</p>
          <p class="whyUs-stat-text">${item.text}</p>
        </div>
      `;
      })
      .join(""); // 'map()' bir dizi (array) döndürür, 'join("")'
    // bu dizideki tüm metinleri birleştirir.

    // 2. İstatistik kutularını da ana kapsayıcısının içine yerleştir
    const contentHTML = `
      <div class="whyUs-stats-container">
        ${statsItemsHTML}
      </div>
    `;

    // 3. Hazırlanan son HTML'i doğrudan ata
    whyUsContent.innerHTML = contentHTML;
  })
  .catch((error) => {
    // Bir hata olursa yakala
    console.error("Veri alınırken bir hata oluştu:", error);
    whyusSection.innerHTML =
      '<p style="color: red;">Veri yüklenemedi. Lütfen konsolu kontrol edin.</p>';
  });
// Başlık Kısmı Bitiş
