function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined:
            shift = 0;
            break;
        case 'h':
            shift = el.eq(0).outerHeight();
            break;
        case 'h/2':
            shift = el.eq(0).outerHeight() / 2;
            break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity : 1
                    }, 600);
                });
            }
        }
    });
}

(function($) {
    $(function() {

       // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });

        // Sections height
        $(window).resize(function() {
            var sH = $(window).height();
            $('header').css('height', sH + 'px');
        });

        // Faded elements
        fadedEls($('.content-3 .col-sm-6 + .col-sm-6 img'), 'h');
        fadedEls($('.content-3 .features'), 75);

        // Parallax
        $('.header-4 .background').each(function() {
            if(! isMobile.any())
                $(this).parallax('50%', 0.3, true);
            else
                $(this).css('background-attachment', 'initial');
        });

        // responsive
        $(window).resize(function() {
            // imgs
            if ($(window).width() > 767) {
                $('.img.mobile-processed').each(function() {
                    $(this).removeClass('mobile-processed').insertAfter($(this).parent());
                });
            } else {
                $('.img:not(.mobile-processed)').each(function() {
                    $(this).addClass('mobile-processed').insertAfter($(this).parent().find('h3'));
                });
            }
        });

        $(window).resize().scroll();

    });
})(jQuery);

