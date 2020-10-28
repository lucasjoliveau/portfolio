document.addEventListener("DOMContentLoaded", function(event) {
    new Swiper(".swiper-container", {
        pagination: {
            el: ".swiper-pagination"
        },
        autoplay: {
            delay: 3e3
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 50
            },
            1e3: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
});
