// const { default: Swiper, Parallax } = require("swiper");

document.addEventListener('DOMContentLoaded', init);

function init() {
    // Swiper.use([Parallax])

    const swiperIMG = new Swiper('.swiper-img', {
        loop: false,
        speed: 2400,
        parallax: true,
    })

    const swiperTXT = new Swiper('.swiper-txt', {
        loop: false,
        speed: 2400,
        mousewheel: {
            invert: true,
          },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        }
    })

    swiperIMG.controller.control = swiperTXT
    swiperTXT.controller.control = swiperIMG

}
