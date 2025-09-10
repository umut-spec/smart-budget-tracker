# 💰 Masraf Takip Uygulaması

Modern ve kullanıcı dostu masraf takip uygulaması. Gelir ve giderlerinizi takip edin, işlemlerinizi kategorilere ayırın ve harcama alışkanlıklarınızı grafiklerle görselleştirin.

![Masraf Takip Demo](https://via.placeholder.com/900x500/667eea/ffffff?text=Masraf+Takip+Uygulamasi)

## ✨ Özellikler

### 💸 İşlem Yönetimi
- **Gelir/Gider Ekleme**: Modal form ile hızlı ve kolay işlem girişi
- **Kategori Sistemi**: 8 önceden tanımlı kategori (Yiyecek, Ulaşım, Alışveriş, Faturalar, Maaş, Serbest İş, Yatırım, Diğer)
- **Anlık Güncelleme**: Her işlem sonrası dashboard anında güncellenir
- **İşlem Geçmişi**: Tüm finansal aktivitelerinizin tam listesi

### 📊 Analiz ve Raporlar
- **Etkileşimli Dashboard**: Temel finansal metrikleri gösteren güzel kartlar
- **Kategori Grafikleri**: Chart.js ile pasta grafik görselleştirmesi
- **Anlık İstatistikler**: Canlı bakiye, toplam gelir ve gider takibi
- **Son Aktiviteler**: En son işlemlerinizin zaman çizelgesi

### 🎨 Modern Arayüz
- **Responsive Tasarım**: Masaüstü, tablet ve mobilde mükemmel çalışır
- **Modern Tasarım**: Temiz, gradient tabanlı tasarım ve yumuşak animasyonlar
- **Sezgisel Navigasyon**: Kolay kullanılır filtreler ve kontroller
- **Hover Efektleri**: Yumuşak geçişlerle etkileşimli elementler

### 💾 Veri Yönetimi
- **Yerel Depolama**: Tüm veriler tarayıcınızda güvenle saklanır
- **Kalıcı Veriler**: Bilgileriniz tarayıcı kapandıktan sonra da kalır
- **Örnek Veriler**: Başlamanız için demo işlemler içerir
- **Export Hazır**: Gelecekteki export özellikleri için hazır veri yapısı

## 🛠️ Kullanılan Teknolojiler

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Grafikler**: Chart.js ile veri görselleştirme
- **İkonlar**: Font Awesome 6
- **Fontlar**: Inter (Google Fonts)
- **Depolama**: Tarayıcı LocalStorage API
- **Tasarım**: CSS Grid, Flexbox, CSS Variables

## 🚀 Hızlı Başlangıç

### Seçenek 1: Doğrudan İndirme
1. **İndirin** veya **klonlayın** bu repository'yi
```bash
git clone https://github.com/[kullanici-adiniz]/masraf-takip-uygulamasi.git
cd masraf-takip-uygulamasi
```

2. **Açın** `index.html` dosyasını tarayıcınızda
3. **Hemen başlayın** masraflarınızı takip etmeye!

### Seçenek 2: GitHub Pages
Canlı demo: `https://[kullanici-adiniz].github.io/masraf-takip-uygulamasi`

## 📁 Proje Yapısı

```
masraf-takip-uygulamasi/
├── index.html          # Ana HTML dosyası
├── style.css           # Stil dosyası
├── script.js           # JavaScript işlevselliği
├── README.md           # Dokümantasyon
└── screenshot.png      # Uygulama ekran görüntüsü
```

## 💡 Nasıl Kullanılır

### İşlem Ekleme
1. **"İşlem Ekle"** butonuna tıklayın
2. İşlem tipini seçin: **Gelir** veya **Gider**
3. Açıklama, kategori ve tutarı doldurun
4. Tarihi seçin
5. **"Kaydet"** butonuna tıklayın

### Analiz Görüntüleme
- **Dashboard Kartları**: Bakiyenizi, toplam gelir ve giderlerinizi bir bakışta görün
- **İşlem Filtreleme**: Filtre butonlarını (Tümü, Gelir, Gider) kullanarak belirli işlem tiplerini görün
- **Kategori Grafikleri**: Harcama dağılımınızı kategorilere göre görselleştirin
- **Son Aktiviteler**: Zaman damgalı en son işlemlerinizi kontrol edin

### Veri Yönetimi
- **İşlem Düzenleme**: Düzenle butonuna tıklayın (yakında gelecek)
- **İşlem Silme**: Silme butonuna tıklayarak işlemleri kaldırın
- **Otomatik Kaydetme**: Tüm veriler otomatik olarak tarayıcınızda saklanır

## 🎨 Özelleştirme

### Renkleri Değiştirme
`style.css` dosyasındaki CSS değişkenlerini düzenleyin:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea, #764ba2);
  --success-color: #48bb78;
  --danger-color: #f56565;
  --warning-color: #ed8936;
}
```

### Yeni Kategori Ekleme
`script.js` dosyasındaki `categoryConfig` nesnesini güncelleyin:
```javascript
const categoryConfig = {
  yeniKategori: { 
    name: 'Kategori Adı', 
    icon: 'fas fa-ikon', 
    color: '#renkkodu' 
  }
};
```

### Grafik Renklerini Değiştirme
`initChart()` fonksiyonundaki grafik renklerini değiştirin:
```javascript
backgroundColor: [
  '#FF6B6B', '#4ECDC4', '#45B7D1', 
  '#96CEB4', '#FFEAA7', '#DDA0DD'
]
```

## 📱 Ekran Görüntüleri

### Masaüstü Görünümü
![Masaüstü Dashboard](https://via.placeholder.com/800x400/667eea/ffffff?text=Masaustu+Gorunum)

### Mobil Görünüm
![Mobil Dashboard](https://via.placeholder.com/300x600/667eea/ffffff?text=Mobil+Gorunum)

### İşlem Ekleme Modalı
![İşlem Ekleme](https://via.placeholder.com/400x500/667eea/ffffff?text=Islem+Ekleme+Modal)

## 🌟 Temel Özellikler

- **Sıfır Bağımlılık**: Karmaşık framework'ler yok, sadece vanilla JavaScript
- **Hafif**: Hızlı yükleme ve yumuşak performans
- **Gizlilik Odaklı**: Tüm veriler tarayıcınızda kalır
- **Modern Tasarım**: Çağdaş arayüz ve yumuşak animasyonlar
- **Mobil Optimize**: Tüm cihazlarda mükemmel deneyim
- **Genişletilebilir**: Değiştirilmesi ve yeni özellik eklenmesi kolay

## 🔧 Tarayıcı Uyumluluğu

- ✅ Chrome 70+
- ✅ Firefox 65+  
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobil tarayıcılar

## 🚧 Gelecek Özellikler

- [ ] **İşlem Düzenleme**: Mevcut işlemleri düzenleme
- [ ] **Tarih Aralığı Filtreleme**: Özel tarih aralıklarına göre filtreleme
- [ ] **Veri Export**: İşlemleri CSV/JSON olarak indirme
- [ ] **Bütçe Hedefleri**: Aylık bütçe belirleme ve takip
- [ ] **Çoklu Para Birimi**: Farklı para birimlerini destekleme
- [ ] **Karanlık/Aydınlık Tema**: Tema değiştirici
- [ ] **Gelişmiş Grafikler**: Daha fazla görselleştirme seçeneği
- [ ] **Arama Fonksiyonu**: İşlemler arasında arama

## 🤝 Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Nasıl yardım edebileceğiniz:

### Başlangıç
1. Repository'yi **fork** edin
2. Fork'unuzu **klonlayın**: `git clone https://github.com/[kullanici-adiniz]/masraf-takip-uygulamasi.git`
3. Yeni bir **branch** oluşturun: `git checkout -b feature/harika-ozellik`
4. Değişikliklerinizi **yapın**
5. Değişikliklerinizi farklı tarayıcılarda **test edin**
6. Değişikliklerinizi **commit** edin: `git commit -m 'Harika özellik eklendi'`
7. Branch'e **push** edin: `git push origin feature/harika-ozellik`
8. Bir **Pull Request** açın

### Geliştirme Kuralları
- **Temiz Kod**: Okunabilir ve sürdürülebilir kod yazın
- **Yorumlar**: Karmaşık mantık için yorumlar ekleyin
- **Test**: Değişiklikleri birden fazla cihaz/tarayıcıda test edin
- **Dokümantasyon**: Gerekirse README'yi güncelleyin

### Hata Raporlama
Hata raporlarken lütfen şunları ekleyin:
- **Tarayıcı** bilgisi (Chrome, Firefox, vb.)
- **İşletim Sistemi** (Windows, Mac, Linux, Mobil)
- Hatayı **yeniden üretme adımları**
- **Beklenen vs gerçek** davranış
- Varsa **ekran görüntüleri**

## 📊 Proje İstatistikleri

- **Kod Satırı**: ~800 satır
- **Dosya Boyutu**: <100KB toplam
- **Yükleme Süresi**: <1 saniye
- **Mobil Performans**: %100 responsive
- **Tarayıcı Desteği**: Modern tarayıcıların %95+'ı

## 🔐 Gizlilik ve Güvenlik

- **Sadece Yerel Depolama**: Dış sunuculara veri gönderilmez
- **Takip Yok**: Analitik veya takip scriptleri yok
- **Gizlilik Önceliği**: Mali verileriniz gizli kalır
- **Güvenli**: Dış API çağrıları veya veri iletimi yok

## 📈 Performans

- **Vanilla JavaScript**: Framework yükü yok
- **Optimize Render**: Verimli DOM manipülasyonu
- **Lazy Loading**: Kaynaklar gerektiğinde yüklenir
- **Minimal Bağımlılık**: Sadece gerekli kütüphaneler (Chart.js)

## 🎯 Kullanım Alanları

Şunlar için mükemmel:
- **Kişisel Finans**: Günlük gider ve gelir takibi
- **Bütçe Planlaması**: Harcama alışkanlıklarını izleme
- **Küçük İşletme**: Basit masraf takibi
- **Öğrenciler**: Harçlık ve masrafları yönetme
- **Freelancerlar**: Proje gelir ve giderlerini takip

## 📚 Öğrenme Kaynakları

Bu proje şunları gösterir:
- **Modern JavaScript**: ES6+ özellikleri ve en iyi uygulamalar
- **DOM Manipülasyonu**: Dinamik içerik güncellemeleri
- **Local Storage**: Tarayıcı veri kalıcılığı
- **Chart.js Entegrasyonu**: Veri görselleştirme
- **Responsive CSS**: Mobil öncelikli tasarım
- **Event Handling**: Kullanıcı etkileşim yönetimi

## 🏆 Teşekkürler

- **Chart.js** - Güzel grafik ve çizelgeler
- **Font Awesome** - Muhteşem ikon kütüphanesi
- **Google Fonts** - Inter font ailesi
- **CSS Tricks** - Modern CSS tekniklerinden ilham
- **MDN Web Docs** - Mükemmel JavaScript dokümantasyonu

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

```
MIT Lisansı

Bu yazılımı ve ilgili dokümantasyon dosyalarını ("Yazılım") elde eden 
herhangi bir kişiye, kullanma, kopyalama, değiştirme, birleştirme, 
yayınlama, dağıtma, alt lisanslama ve/veya Yazılımın kopyalarını 
satma haklarını kısıtlama olmaksızın ücretsiz olarak verme izni 
verilmektedir.
```

---

## 🎉 Destek Gösterin

Bu projeyi beğendiyseniz lütfen:

- ⭐ Repository'ye **yıldız** verin
- 🍴 Katkıda bulunmak için **fork** edin
- 📢 Arkadaşlarınızla **paylaşın**
- 🐛 Hata **rapor** edin veya özellik önerin

---

**❤️ Türkiye'de yapıldı**
