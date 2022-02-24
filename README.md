# DaireAlanveCevreHesaplamaNode.js

Projenein Görevleri: (Bu projeyi node.js den faydalanarak geliştirdim.
-Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
-module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
-require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.

-Bunun için ilk başta dairenin alan ve çevrenin hesaplanması fonksiyonları için circle.index dosyasını oluşturdum ve gerekli işlemleri bu dosya üzerinde gerçekleştirdim.

```
/*Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
*/

//Dairenin Alanı Hesaplaması İçin Oluşturulan Fonksiyon
function circleArea(yaricap) {
    const piSayisi = 3.14
    let alan = piSayisi*yaricap*yaricap
    console.log(`Yarıçapı ${yaricap} Olan Dairenin Alanı: ${alan}`)
}

//Dairenin Çevresi Hesaplaması İçin Oluşturulan Fonksiyon
function circleCircumference(yaricap) {
    const piSayisi = 3.14
    let cevre = 2*piSayisi*yaricap
    console.log(`Yarıçapı ${yaricap} Olan Dairenin Çevresi: ${cevre}`)
}

//circle.js dosyasındaki fonksiyonlara diğer dosyaların da-index.js- erişmeleri için expor edilme işlemi
module.exports = {circleArea, circleCircumference}
```
-Daha sonra index.js adında bir dosya oluşturdum ve buraya circle.js dosyasını ekledim ve de circle.js dosyasındaki fonksiyonları burada çağırarak projeyi tamamladım.

```
/*
circle.js dosyasına ulaşmak için iki yöntem vardır: 1.yöntem, değişkene tanımlamak, 2.yöntem object destructing

1.Yöntem-değişken -sayfaya circle.js dosyasını ekleme
const daireHesaplama = require("./circle.js")

-Alan ve çevre hesaplama Fonksiyonları çağırma
daireHesaplama.circleArea(4)
daireHesaplama.circleCircumference(4)

*/


//2.yöntem-Object destructing-sayfaya circle dosyasını ekleme
const {circleArea,circleCircumference} = require("./circle")

//Alan ve çevre hesaplama Fonksiyonları çağırma
circleArea(4)
circleCircumference(4)
```
-circle.js dosyasının index.js dosyasına eklenmek için iki yöntem vardır. İki yöntemi de proje dosyasında belirttim.

**1. Yöntemin Sonucu**

![modüleryapıdaire1](https://user-images.githubusercontent.com/86554799/155549920-0bbdcbef-6c64-4ee9-a18b-5e16665a3def.jpg)

**2. Yöntem Sonucu **

![modüleryapıdaire2](https://user-images.githubusercontent.com/86554799/155549948-24871187-8bfa-442d-a5d5-065af0dae16e.jpg)


