(function($) {
    $(document).ready(function() {
        $('[data-toggle="offcanvas"]').click(function(e) {
            e.preventDefault();
            $('.sidebar-offcanvas').toggleClass('active');
        });
    });
})(jQuery);
