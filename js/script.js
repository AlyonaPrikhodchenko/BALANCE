import"./vendor/swiper.js";const namesProducts=["Для салата","Итальянское","Для мяса","Восточное"];new Swiper(".swiper",{pagination:{el:".products__pagination",clickable:!0,renderBullet:function(n,e){return`<span class=${e}>${namesProducts[n]}</span>`}}});