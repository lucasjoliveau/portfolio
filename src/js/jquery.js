TweenMax.from(".navbar", 2, {
    top: "-75px",
    ease: Expo.easeInOut,
    delay: 0.4,
});

var t1 = new TimelineMax({paused: true});

t1.to(".nav", 1.8, {
    width: "100%",
    ease: Expo.easeInOut,
});

t1.staggerTo(".nav-item a", 0.6, {top: "0px", ease: Expo.easeInOut}, 0.1, "-=0.8");

t1.reverse();
$(document).on("click", ".nav-toggle", function () {
    t1.reversed(!t1.reversed());
    document.querySelector('.nav-toggle').classList.toggle('nav-toggle-active');
    document.querySelector('body').classList.toggle('overflow-menu');
});

$(document).on("click", ".nav-item a", function () {
    t1.reversed(!t1.reversed());
    document.querySelector('.nav-toggle').classList.remove('nav-toggle-active');
    document.querySelector('body').classList.remove('overflow-menu');
});


paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('.logo-preloader').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


    $('#preloader').delay(1500).animate({top: '-110%'}, 2000, $.bez([0.19,1,0.22,1]));

    TweenMax.from(".title", 2, {
        delay: 1.8,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    })
});