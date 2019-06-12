; (function () {
    var $dropdown = $('[data-dropdown]');
    var $activeEl = $dropdown.find('[data-dropdown-active]');
    var $list = $dropdown.find('[data-dropdown-list]');
    var $listItems = $list.find('li');

    $activeEl.on('click', function (e) {
        e.stopPropagation();
        $dropdown.toggleClass('opened');
    })

    $listItems.on('click', function (e) {
        var id = $(e.currentTarget).data('dropdown-id')
        $listItems.removeClass('active');
        $(e.currentTarget).addClass('active');
        $activeEl.text(id.toUpperCase());
        $dropdown.removeClass('opened');
    });

    window.addEventListener('click', function (e) {
        if (!$dropdown[0].contains(e.target)) {
            $dropdown.removeClass('opened');
        }
    }, false);
})();