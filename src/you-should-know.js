$(document).ready(function () {


    $('.product-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        // autoplay: true,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    // centerMode: true,
                    slidesToShow: 1
                }
            }
            
        ]
    });



})