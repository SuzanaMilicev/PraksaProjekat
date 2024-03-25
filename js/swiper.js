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
    slidesPerView: 1,
    spaceBetween: 5,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        630: {
            slidesPerView: 2,
        },
        895: {
            slidesPerView: 3,
        },
        1150: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 5,
        }
    }
});

