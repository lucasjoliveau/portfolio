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

//     document.querySelector('.main-skills').addEventListener('mouseenter', skillsLine1);
//
// function skillsLine1 () {
//         document.querySelector('.skills-1').classList.add('skills-big-title-gradient');
//         // document.querySelector('.skills-' + i).classList.remove('.skills-big-title-gradient');
//         setTimeout(skillsLine2, 1500);
//         console.log('bjr');
// }
//
//     function skillsLine2 () {
//             document.querySelector('.skills-1').classList.remove('skills-big-title-gradient');
//             document.querySelector('.skills-2').classList.add('skills-big-title-gradient');
//             // document.querySelector('.skills-' + i).classList.remove('.skills-big-title-gradient');
//             setTimeout(skillsLine3, 1500);
//     }
//
//     function skillsLine3 () {
//             document.querySelector('.skills-2').classList.remove('skills-big-title-gradient');
//             document.querySelector('.skills-3').classList.add('skills-big-title-gradient');
//             // document.querySelector('.skills-' + i).classList.remove('.skills-big-title-gradient');
//             setTimeout( () => {
//                 document.querySelector('.skills-3').classList.remove('skills-big-title-gradient');
//                 skillsLine1();
//             }, 1500);
//         document.querySelector('.main-skills').removeEventListener('mouseenter', () => {
//             console.log('bjr');
//         });
//
//     }

});
