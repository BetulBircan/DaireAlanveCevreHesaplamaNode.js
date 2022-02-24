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