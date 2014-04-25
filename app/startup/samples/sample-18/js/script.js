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
         
        
        // Features
        $(window).resize(function() {
            $('.features').each(function() {
                var maxH = 0;
                $('.features-body', this).css('height', 'auto').each(function() {
                    var h = $(this).outerHeight();
                    if (h > maxH)
                        maxH = h;
                }).css('height', maxH + 'px');
                $('.features-bodies', this).css('height', maxH + 'px');
            });
        });

        $('.features .features-header .box').click(function() {
            $(this).addClass('active').parent().children().not(this).removeClass('active');
            $(this).closest('.features').find('.features-body').removeClass('active').eq($(this).index()).addClass('active');
            return false;
        });

        // Faded elements
        fadedEls($('.content-24 .image'), $('.content-24 .image').outerHeight() / 3 * 2);
        
        
        // responsive
        $(window).resize(function() {
            var sH = $(window).height();
            $('section.header-10-sub').css('height', sH + 'px');
        });

    });

    $(window).load(function() {

        $('html').addClass('loaded');

        $(window).resize().scroll();

    });
})(jQuery);
