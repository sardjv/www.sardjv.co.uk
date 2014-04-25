(function($) {
    $(function() {

       // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });

       
        $(window).resize(function() {
            $('.header-16-sub').css('height', $(this).height() + 'px');
        });

        
        (function(el) {
            $(window).resize(function() {
                if (!el.hasClass('ani-processed')) {
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight() - parseInt(el.css('padding-bottom'), 10) - 200);
                }
            }).scroll(function() {
                if (!el.hasClass('ani-processed')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        el.addClass('ani-processed');
                    }
                }
            });
        })($('.content-7'));

        

        $(window).resize().scroll();

    });

    $(window).load(function() {

        $('html').addClass('loaded');

        $(window).resize().scroll();

    });
})(jQuery);
