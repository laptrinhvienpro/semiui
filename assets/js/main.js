$(function() {

    // Foundation Init
    $(document).foundation();

    // Sticky footer
    var $footer = $('[data-sticky-footer]'); // only search once
    $(window).bind('load resize orientationChange', function() {
        var pos = $footer.position(),
            height = ($(window).height() - pos.top) - ($footer.height() - 1);
        if (height > 0) {
            $footer.css('margin-top', height);
        }
    });

    // On change window size
    $(window).on('changed.zf.mediaquery', function() {
        // Patch for a Bug drilldown-dropdown menu combo in v6.3.1
        $('.is-dropdown-submenu.invisible').removeClass('invisible');
        // Close canvas menu on medium+
        if (Foundation.MediaQuery.current !== 'small') {
            $('#canvas-menu').foundation('close');
        }
    });
    
    // ========= END ===========
});