document.addEventListener("DOMContentLoaded", function (event) {
    // Initialisation of AOS Animate Library
    AOS.init();

    TweenMax.from(".navbar", 2, {
        top: "-75px",
        ease: Expo.easeInOut,
        delay: 0.4,
    });

    var t1 = new TimelineMax({ paused: true });

    t1.to(".nav", 1.8, {
        width: "100%",
        ease: Expo.easeInOut,
    });

    t1.staggerTo(".nav-item a", 0.6, { top: "0px", ease: Expo.easeInOut }, 0.1, "-=0.8");

    t1.reverse();
    $(document).on("click", ".nav-toggle", function () {
        t1.reversed(!t1.reversed());
        document.querySelector('.nav-toggle').classList.toggle('nav-toggle-active');
    });

    $(document).on("click", ".nav-item a", function () {
        t1.reversed(!t1.reversed());
        document.querySelector('.nav-toggle').classList.remove('nav-toggle-active');
    });
});
