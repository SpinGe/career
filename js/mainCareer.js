/* Waypoint Animations */
$('.animate-this').waypoint({
    handler: function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
            $(this.element).addClass('item-animate');
            setTimeout(function () {
                $('body .animate-this.item-animate').each(function (ctr) {
                    var el = $(this),
                        animationEfx = el.data('animate') || null;

                    if (!animationEfx) {
                        animationEfx = $(el).attr("id");
                    }
                    setTimeout(function () {
                        el.addClass(animationEfx + ' animated');
                        el.removeClass('item-animate');
                    }, ctr * 30);
                });
            }, 100);
        }
        // trigger once only
        this.destroy();
    },
    offset: '90%'
});
/* END Waypoint Animations */

/* NavBar */
$(".navbar-fixed-top").autoHidingNavbar({
    animationDuration: 300
});
$(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});
$(function () {
    $('li.dropdown-submenu').on('click', function (event) {
        event.stopPropagation();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $('li.dropdown-submenu').removeClass('open');
            $(this).addClass('open');
        }
    });
});
/* END NavBar */
