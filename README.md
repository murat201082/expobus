# expobus Projesi

expobus, React Native ve Expo kullanılarak geliştirilen bir mobil uygulamadır. Otobüs seyahatleri için bilet rezervasyonlarını kolaylaştırmak amacıyla tasarlanmıştır.

## Özellikler

Projede aşağıdaki özellikler bulunmaktadır:

- **Firebase Kullanıcı Girişi ve Kaydı**: Kullanıcılar uygulamaya Firebase üzerinden giriş yapabilirler. Kayıt işlemi de Firebase kullanılarak gerçekleştirilir.

- **Koltuk Seçimi Sınırlaması**: Kullanıcılar en fazla beş koltuk seçebilir. Bu sınıra ulaşıldığında, "Beş koltuktan fazla seçemezsiniz!!!" uyarısı Toast mesajı ile gösterilir.

- **Cinsiyet Sınırlaması**: Uygulama, kadın ve erkeklerin yanyana oturmasını önlemek için otomatik olarak cinsiyet sınırlamaları ekler.

- **Kalkış ve Varış Yeri Seçimi**: Kullanıcılar nereden nereye gitmek istediklerini yazabilirler. Tarih belirlemek için DateTimePicker kullanılır.

- **Ödeme Ekranı**: Kullanıcılar seçtikleri koltuk numaralarını ve toplam ödemeyi son ekranda görüntüleyebilirler. Öde butonuna basıldığında "ödemeniz başarılı bir şekilde gerçekleşti" mesajı alınır ve 5 saniye içinde ana sayfaya yönlendirilirsiniz.

---



### Gereksinimler

Bu projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gerekmektedir:

- Node.js 18.18.0
- npm veya yarn
- Expo CLI

### Kurulum

1. Bu projeyi klonlayın:

   git clone https://github.com/murat201082/expobus.git
2. Proje dizinine gidin:
    cd expobus

3. Bağımlılıkları yükleyin:
    npm install
# veya
    yarn install

4. Uygulamayı başlatın:
    npm start

## Kullanılan Bağımlılıklar
Bu projede aşağıdaki bağımlılıklar kullanılmıştır:

    "@react-native-async-storage/async-storage": "^1.18.2"
    "@react-native-community/datetimepicker": "^7.2.0"
    "@react-native-firebase/auth": "^10.4.0"
    "@react-navigation/drawer": "^6.6.4"
    "@react-navigation/native": "^6.1.8"
    "@react-navigation/native-stack": "^6.9.14"
    "expo": "~49.0.11"
    "expo-status-bar": "~1.6.0"
    "firebase": "^10.4.0"
    "react": "18.2.0"
    "react-native": "^0.72.5"
    "react-native-reanimated": "~3.3.0"
    "react-native-safe-area-context": "4.6.3"
    "react-native-screens": "~3.22.0"
    "toastify-react-native": "^3.1.0"

## Babel Ayarları
Babel ayarları aşağıdaki gibi konfigüre edilmiştir:
    module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

## Katkıda Bulunma
Projeye katkıda bulunmak isterseniz, öneriler ve pull istekleri açık bir şekilde karşılanır. Katkıda bulunmak istiyorsanız, aşağıdaki adımları izleyin:

Bu projeyi forklayın.
Yeni bir özellik veya düzeltme ekleyin.
Değişikliklerinizi açıklayan bir commit yapın.
Pull isteği oluşturun.

## İletişim
E-posta: murat201082@gmail.com
Proje Linki: https://github.com/murat201082/expobus.git 





