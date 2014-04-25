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

        (function(el) {
            $('.col-sm-10 > img', el).css('opacity', 0);

            $(window).resize(function() {
                if (!el.hasClass('ani-processed')) {
                    $('.col-sm-10 > img', el).css('top', $('.col-sm-10 > img', el).height());
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                }
            }).scroll(function() {
                if (!el.hasClass('ani-processed')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        el.addClass('ani-processed');
                        $('.col-sm-10 > img', el).animate({
                            top : 0,
                            opacity : 1
                        }, 500);
                    }
                }
            });
        })($('.content-28'));

        // Faded elements
        fadedEls($('.content-9 .col-sm-5 img'), 'h/2');

        // Parallax
        $('.tpl-6-section-1').each(function() {
            if(! isMobile.any())
                $(this).parallax('50%', 0.3, true);
            else
                $(this).css('background-attachment', 'initial');
        });

        // responsive
        $(window).resize(function() {
            // features
                 
                 $('.header-3-sub, .header-3-sub .background').each(function() {
                    $(this).parallax('50%', -0.3, true);
                 });
            
            if ($(window).width() > 480) {
               
                
                $('.features > .mobile-processed').each(function() {
                    $(this).removeClass('mobile-processed').find('.img').insertAfter($('.description-top', this));
                });
            } else {
                 
                $('.features > :not(.mobile-processed)').each(function() {
                    $(this).addClass('mobile-processed').find('.img').insertBefore($('.description-top', this));
                });
            }
        });

        
    });

    $(window).load(function() {

       // $(window).resize().scroll();
        setTimeout(function() {
            window.scrollBy(0, 1);
        }, 100);
        // force repaint page (parallax img bug fix)

    });
})(jQuery);

