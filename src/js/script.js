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


    paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };

    Pace.on('done', function() {
        $('.logo-preloader').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


        $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

        TweenMax.from(".title", 2, {
            delay: 1.8,
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
        })
    });

    // Detect when view video link is clicked. If, then it open the modal window and remove overflow behavior of body.
    document.querySelector('.modale-ytb-link').addEventListener('click', () => {
        document.querySelector(".modale-ytb").classList.remove('modale-ytb-hidden');
        document.querySelector("body").classList.add('overflow-menu');
    });

    // Detect when the modal window is clicked to close the window and stop the video.
    document.querySelector('.modale-ytb').addEventListener('click', () => {
        document.querySelector("body").classList.remove('overflow-menu');
        document.querySelector(".modale-ytb").classList.add('modale-ytb-hidden');
        stopVideo();
    });

});

// Load YouTube video
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '540',
        width: '960',
        videoId: 'ORNZKKXEkTQ',
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    document.querySelector('.modale-ytb-link').addEventListener('click', () => {
        event.target.playVideo();
    });
}

function stopVideo() {
    player.stopVideo();
}