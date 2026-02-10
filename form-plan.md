## Bağlam

Form tasarımı ve dağıtımı tamamlandı. Şimdi formları Google Sheet'e bağlayacağız.

### Hedef Sheet: <https://docs.google.com/spreadsheets/d/1GCnbaQGPmierjRpSHQgAR9wuGaFLyIqKJUUnxaFMi90/edit?gid=0#gid=0>

## Adım 1: Sheet'teki sütun sırasını Chrome'dan oku

- Google Sheet'i aç, başlık satırındaki sütun sırasını oku
- appendRow sırasını buna göre ayarla

## Adım 2: Chrome'da Apps Script oluştur

- Sheet'te Extensions > Apps Script aç
- doPost fonksiyonunu yaz (sütun sırası Sheet'e göre)
- Deploy et → Web App URL'yi al

## Adım 3: form-handler.js güncelle

- GOOGLE_APPS_SCRIPT_URL_PLACEHOLDER → gerçek URL

## Adım 4: Test et

- Local sunucudan form gönder, Sheet'e düştüğünü doğrula

### Etkilenen Dosya

Dosya İşlem form-handler.js  Placeholder URL → gerçek Apps Script URL
