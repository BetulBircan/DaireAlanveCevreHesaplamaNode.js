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