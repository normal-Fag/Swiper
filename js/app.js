// const { default: Swiper, Parallax } = require("swiper");

document.addEventListener('DOMContentLoaded', init);

function init() {
    // Swiper.use([Parallax])

    const swiperIMG = new Swiper('.swiper-img', {
        loop: false,
        speed: 2400,
        parallax: true,
        mousewhell: {
            invert: false,
        },
    })
}
