document.addEventListener("DOMContentLoaded", function (event) {

    // Locomotive Scroll Initalisation
    (function () {
        var scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            smoothMobile: true,
            // direction:"horizontal",
            // inertia:1,
            // repeat:true,
            offset: ["10%", 100]
        });
    })();
});
