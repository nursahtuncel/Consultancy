//   <!-- can-oc-12-13-why us section start -->

// Başlık Kısmı Başlangıç

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

    // === BÖLÜM 1: Metin İçeriğini Yükle ===
    // JSON'daki 'why-us-textContent' objesine erişiyoruz
    const textContent = data["why-us-textContent"];

    // Ana Div Oluşturuldu
    const anaKapsayici = document.createElement("div");
    anaKapsayici.className = "whyUs-header";
    //Alt Başlık Oluşturuldu
    const altBaslik = document.createElement("p");
    altBaslik.textContent = textContent.eyebrow; // <-- Değişti
    altBaslik.className = "whyUs-alt-baslik";

    //Ana Başlık Oluşturuldu
    const anaBaslik = document.createElement("h2");
    anaBaslik.textContent = textContent.heading; // <-- Değişti
    anaBaslik.className = "whyUs-ana-baslik";

    //Açıklama Oluşturuldu
    const aciklama = document.createElement("p");
    aciklama.textContent = textContent.description; // <-- Değişti
    aciklama.className = "whyUs-aciklama";

    // Metinleri ana kutuya ekle
    whyusHeader.appendChild(anaKapsayici);
    whyusHeader.appendChild(altBaslik);
    whyusHeader.appendChild(anaBaslik);
    whyusHeader.appendChild(aciklama);

    // === BÖLÜM 2: İstatistikleri Yükle ===

    // 1. İstatistikler için bir ana kapsayıcı (container) oluştur
    const statsContainer = document.createElement("div");
    statsContainer.className = "whyUs-stats-container";

    // 2. JSON'daki 'whyUsData' dizisi (array) içinde dön
    //    Dizideki her bir eleman için (item) bu fonksiyonu çalıştır
    data.whyUsData.forEach((item) => {
      // Her bir istatistik için (1200, 20, 55...) bir kutu oluştur
      const statItem = document.createElement("div");
      statItem.className = "whyUs-stat-item";

      // Değer için (1200) bir eleman oluştur
      const statValue = document.createElement("p");
      statValue.textContent = item.value;
      statValue.className = "whyUs-stat-value";

      // Metin için (Projects Completed) bir eleman oluştur
      const statText = document.createElement("p");
      statText.textContent = item.text;
      statText.className = "whyUs-stat-text";

      // Değeri ve metni istatistik kutusuna ekle
      statItem.appendChild(statValue);
      statItem.appendChild(statText);

      // Hazırlanan istatistik kutusunu ana kapsayıcıya ekle
      statsContainer.appendChild(statItem);
    });

    whyUsContent.appendChild(statsContainer);
  })
  .catch((error) => {
    // Bir hata olursa yakala
    console.error("Veri alınırken bir hata oluştu:", error);
    whyusSection.innerHTML =
      '<p style="color: red;">Veri yüklenemedi. Lütfen konsolu kontrol edin.</p>';
  });
// Başlık Kısmı Bitiş
