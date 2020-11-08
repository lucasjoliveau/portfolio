document.addEventListener("DOMContentLoaded", function (event) {

    // Locomotive Scroll Initalisation
    (function () {
        var scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: off,
            smoothMobile: off,
            // direction:"horizontal",
            // inertia:1,
            // repeat:true,
            offset: ["45%", -100]
        });
    })();
});
