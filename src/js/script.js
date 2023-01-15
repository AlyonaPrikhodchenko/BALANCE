import './vendor/swiper.js'

const namesProducts = ['Для салата', 'Итальянское', 'Для мяса', 'Восточное']

new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.products__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}>${namesProducts[index]}</span>`
    }
  }
});
