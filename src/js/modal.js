(function() {
    function closeModal() {
        var overlay = $('.modal-overlay');
        $('.modal').removeClass('opened');
        overlay.removeClass('opened');
    }

    function openModal(e) {
        if(e.target) {
            var $target = $(e.currentTarget);
            var id = $target.data('modal');
        } else {
            var id = e;
        }

        var modal = $('[data-modal-id="'+id+'"]');
        var overlay = $('.modal-overlay');

        modal.addClass('opened');
        overlay.addClass('opened');
    }

    $('[data-close-btn]').on('click', function () {
        closeModal();
    });

    $('.modal-close').on('click', function () {
        closeModal();
    });

    $('.modal-overlay').on('click', function () {
        closeModal();
    });

    $('[data-modal]').on('click', function (e) {
        openModal(e);
    });

    $('#modal-form').on('submit', function(e) {
        e.preventDefault();
        closeModal();
        openModal('modal-thanks');
    });

})();