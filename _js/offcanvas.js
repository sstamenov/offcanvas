(function($) {
    $(document).ready(function() {
        $('[data-toggle="offcanvas"]').click(function(e) {
            e.preventDefault();
            $($(this).attr("data-target")).toggleClass('active');
        });
    });
})(jQuery);
