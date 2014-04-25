$(document).ready(function() {
    function isAppleDevice() {
        return (
            (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
                (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
                (navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
            );
    }

    var iframe = $('#pPlayer')[0];
    var player = $f(iframe);
    player.addEvent('ready', function() {});

    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }


    $('#play').click(function(evt) {
        evt.preventDefault();
        $('body').prepend($('.mask, .popup-video'));
        $('header-23 .mask, header-23 .popup-video').detach();
        $('.mask, .popup-video').fadeIn('slow');
        player.api('play')
        $('.mask').click(function() {
            player.api('pause');
            $('.popup-video, .mask').fadeOut('slow', function() {
                $('.header-23').prepend($('.mask, .popup-video'));
                $('body > .mask, body > .popup-video').detach();
            });
        });
    });


    $('.content-23').each(function() {
        if(! isMobile.any())
            $(this).parallax('50%', 0.3, true);
        else
            $(this).css('background-attachment', 'initial');
    });
});
