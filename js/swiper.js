const swiper1 = new Swiper('.swiper1', {
    direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination1',
    }
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        400: {
            slidesPerView: 1,
        },
        790: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        }
    }
});

