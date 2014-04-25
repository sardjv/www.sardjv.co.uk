(function($) {
    startupKit.uiKitHeader._inFixedMode('.header-custom');
    $(window).resize(function() {
        var sH = $(window).height();
        $('section.header-custom-sub').css('height', sH + 'px');
    });
})(jQuery);