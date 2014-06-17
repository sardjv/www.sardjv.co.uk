'use strict';

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 30) {
            $('#navbar2 .desktop').addClass('hidden-sm hidden-md hidden-lg');
            $('#navbar2 .mobile').addClass('visible-sm visible-md visible-lg');
        } else {
            $('#navbar2 .desktop').removeClass('hidden-sm hidden-md hidden-lg');
            $('#navbar2 .mobile').removeClass('visible-sm visible-md visible-lg');
        }
    });

    videojs('home-video', {'height':'auto', 'width':'auto'}).ready(function(){
    var myPlayer = this;    // Store the video object
        var aspectRatio = 1080/1920; // Make up an aspect ratio

        function resizeVideoJS(){
            // Get the parent element's actual width
            var width = document.getElementById(myPlayer.id()).parentElement.offsetWidth;
            // Set width to fill parent element, Set height
            myPlayer.width(width).height( width * aspectRatio );
        }

        resizeVideoJS(); // Initialize the function
        window.onresize = resizeVideoJS; // Call the function on resize
        
        myPlayer.on("play", function(){
            $('#navbar2').hide();
        });
        
        myPlayer.on("ended", function(){
            $('#navbar2').show();
        });
        myPlayer.on("pause", function(){
            $('#navbar2').show();
        });
    });
    
});

