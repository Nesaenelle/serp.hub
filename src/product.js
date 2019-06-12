(function($) {

    $('.slider').on('init', function(event, slick) {
        var hash = window.location.hash.substr(1);
        hash = +hash;
        
        if (hash) {
            if (hash > 0 && hash <= slick.slideCount) {
                setTimeout(function() {
                    hash = hash-1;
                    $('.slider').slick('slickGoTo', hash, true);
                    changeTheme(hash);
                    $('body').show();
                }, 0);
            } else {
                $('body').show();
            }
        } else {
            $('body').show();
        }
    });


    $(".slider").on("beforeChange", function(event, slider, slideIndex, nextSlide) {

        // setTimeout(function() {
        //     $('body').attr('data-product', '');
        // },250);
        setTimeout(function() {
            changeTheme(nextSlide);
        }, 300);
    });

    $('.slider').slick({
        // centerMode: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        // dots: true,
        arrows: true,
        // infinite: true,
        // cssEase: 'linear',
        draggable: false
        // variableWidth: true,
        // variableHeight: true
    });

    function changeTheme(nextSlide) {
        $('header')[0].className = 'product-' + (nextSlide + 1);
        $('body').attr('data-product', '');
        $('body').attr('data-product', (nextSlide + 1));
    }



})(jQuery);