(function($) {
    $(document).ready(function() {
        $('[data-toggle="offcanvas"]').click(function(e) {
            e.preventDefault();
            $('[data-toggle="offcanvas"]').not(this).each(function(i,v){
            	$($(v).attr("data-target")).removeClass("active");
            })
            $($(this).attr("data-target")).toggleClass('active');
        });
    });
})(jQuery);
