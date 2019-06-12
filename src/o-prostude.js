(function($) {
    
 $('.notises-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // autoplay: true,
        responsive: [
            // {
            //     breakpoint: 1600,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 1
            //     }
            // },
            // {
            //     breakpoint: 1280,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 4
            //     }
            // },
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 3
            //     }
            // },
            // {
            //     breakpoint: 768,
            //     settings: {
            //         // centerMode: true,
            //         slidesToShow: 2
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         // arrows: false,
            //         // dots: false,
            //         // centerMode: true,
            //         // centerPadding: '20px',
            //         slidesToShow: 1
            //     }
            // }
        ]
    });
})(jQuery);