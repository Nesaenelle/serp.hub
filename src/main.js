$(document).ready(function() {
    $('body').fadeIn(1000);
    $(".slider-for").on("beforeChange", function(event, slider, slideIndex, nextSlide) {
        var curSlide = slider.$slides[nextSlide]
        // changeSliderInfo(curSlide);

        // setTimeout(function() {
        $('body').attr('data-theme', (nextSlide + 1));
        // }, 300);

        $(".slider-nav").data("carousel").goTo(nextSlide);
    });




    $('.text-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        responsive: []
    });



    subSlider();
    cloudSlider();
    mobSlider();
    $(window).on('resize', function() {
        $('.slider-for').slick('unslick');
        $('.mobile-slider').slick('unslick');
        $('body').attr('data-theme', 1);
        subSlider();
        cloudSlider();
        mobSlider();
    });

    function mobSlider() {
        $('.mobile-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            infinite: true,
            centerMode: true,
            accessibility: false,
            pauseOnHover: true,
            focusOnSelect: true,
            centerPadding: '0px',
            speed: 700,
            draggable: false
        });
    }

    function subSlider() {

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 7000,
            pauseOnHover: true,
            asNavFor: '.mobile-slider',
            // prevArrow: $('.slider-arrow-prev'),
            // nextArrow: $('.slider-arrow-next')
        });
    }

    function cloudSlider() {
        $(".slider-nav").Cloud9Carousel({
            // autoPlay: 1,
            farScale: 0.5,
            // yRadius: 100,
            // bringToFront: true,
            buttonLeft: $(".slider-nav__buttons > .prev"),
            buttonRight: $(".slider-nav__buttons > .next"),
            // frontItemClass: 'active',
            onLoaded: function(carousel) {
                // Show carousel
                // $(carousel).css( 'visibility', 'visible' );
                // alert( 'Carousel is ready!' );
            },
            onRendered: function(carousel) {
                // var item = $(carousel).data("carousel").nearestItem();
                // console.log( "Item closest to the front: " + $(item).attr("alt") );
            },
            onAnimationFinished: function(carousel) {
              var index = carousel.nearestIndex();
              $('.slider-for').slick('slickGoTo', index);
            }
            // onAnimationStart: function(carousel) {
            //   var index = carousel.nearestIndex();
            //   $('.slider-for').slick('slickGoTo', index);
            // }
        });
    }

    $('.cloud9-item a').on('click', function(e) {
        e.preventDefault();
        var index = $(e.target).data('slide');
          if($(e.target).parent().hasClass('active')) {
              // window.open(e.target.href);
              window.location.href = e.target.href;
          } else {
              $('.slider-for').slick('slickGoTo', index - 1);
          }
    });

})