document.addEventListener("DOMContentLoaded", function (event) {
    // Initialisation of AOS Animate Library
    AOS.init();

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

    // Hide navigation menu when mouse scroll
    var prevScrollpos = window.pageYOffset;

    // When scroll is detected
    window.onscroll = function () {
        // Get current scroll Y axis position
        var currentScrollPos = window.pageYOffset;

        // If the previous scroll position is higher than the current
        if (prevScrollpos > currentScrollPos) {
            // Show the navigation bar, so the top position is 0
            document.getElementById("navbarid").style.top = "0";

            // Hide the navigation bar, so the top position is minus 100
        } else {
            document.getElementById("navbarid").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }



});
