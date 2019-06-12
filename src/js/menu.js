; (function () {
    var $menuBtn = $('[data-menu-btn]');
    var $menu = $('[data-menu]');
    var $nav = $('header nav');

    $menuBtn.on('click', function (e) {
        e.stopPropagation();
        $menuBtn.toggleClass('opened');
        $menu.toggleClass('opened');
        $nav.toggleClass('opened');
    })


    window.addEventListener('click', function (e) {
        if (!$menu[0].contains(e.target)) {
            $menu.removeClass('opened');
            $menuBtn.removeClass('opened');
            $nav.removeClass('opened');
        }
    }, false);
})();