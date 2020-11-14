document.addEventListener("DOMContentLoaded", function (event) {
    // Initialisation of AOS Animate Library
    AOS.init();

    if (window.location.pathname === "/index.html") {
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
    }
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
            videoId: 'Uhlv_DBnZ0s',
            playerVars: {
                modestbranding: 1,
                rel: 0
            },
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

