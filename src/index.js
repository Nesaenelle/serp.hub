import './scss/style.scss'
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import './lightslider';


$('[data-dropdown-value]').on('click', function(e) {
    e.stopPropagation();
    $(this).closest('[data-dropdown]').toggleClass('active');
});

$('[data-dropdown-item]').on('click', function(e) {
    var text = $(this).text();
    $(this).closest('[data-dropdown]').find('[data-dropdown-value]').text(text);
    $(this).closest('[data-dropdown]').removeClass('active');
});

$(window).on('click', function(e) {
    if ($('[data-dropdown]').length && !$('[data-dropdown]')[0].contains(e.target)) {
        $('[data-dropdown]').removeClass('active');
    }

    if ($('.modal--body').length && !$('.modal--body')[0].contains(e.target)) {
        $('.modal').removeClass('active');
        $('.modal--overlay').removeClass('active');
    }

});


$('.search-input').on('input', (e) => {
    let val = e.target.value;
    if (val) {
        $('.pandas-list .pandas-list__item').hide();
        $('.pandas-list .pandas-list__item').eq(0).show();
    } else {
        $('.pandas-list .pandas-list__item').show();
    }
});

$('.bottom-form form').on('submit', (e) => {
    e.preventDefault();
    $('.bottom-form form input').val('');
    //show modal
    openModal('thanks');
});

$('.form').on('submit', (e) => {
    e.preventDefault();

    var controls = [...e.target.elements].filter(r => r.localName === 'input');
    
    if (e.target.checkValidity()) {
        var modalId = $(e.target).data('modal-id');
        e.target.reset();
  
        openModal(modalId);
       
        controls.forEach(c=> {
            resetValidaty(c);
        });
    } else {
        var targetInput = controls.filter(r=> !r.classList.contains('success') || r.classList.contains('error'))[0];
        if(targetInput) {
            checkValidity(targetInput);
            targetInput.focus();
        }
    }
});

$('.form').on('input', function(e) {
    checkValidity(e.target);
});

function checkValidity(el) {
    if (el.checkValidity()) {
        $(el).addClass('success');
        $(el).removeClass('error');
        $('.payment__step').eq(1).addClass('active');
    } else {
        $(el).addClass('error');
        $(el).removeClass('success');
        $('.payment__step').eq(1).removeClass('active');
    }
}

function resetValidaty(el) {
    $(el).removeClass('success');
    $(el).removeClass('error');
    $('.payment__step').eq(1).removeClass('active');
}


$('.feedback__form').on('submit', (e) => {
    e.preventDefault();
    let clone = $('.feedback__list__item').eq(0).clone();
    let name = e.target.name.value;
    let text = e.target.text.value;
    let rating = e.target.rating.value;
    clone.find('.feedback__list__item--name').text(name);
    clone.find('.feedback__list__item--date').text(new Date().toLocaleString());
    clone.find('.feedback__list__item--text').text(text);
    $('.feedback__list').prepend(clone);

    e.target.reset();
});

$('.feedback--more').on('click', function() {
    var clone = $('.feedback__list').children().slice(0, 3).clone();
    $('.feedback__list').append(clone);
});

$('.feedback__form .rating img').on('click', function() {
    var input = $(this).siblings('input');
    var id = $(this).data('id');
    $(this).parent().find('img').attr('src', 'img/star.svg');

    $(this).prevAll().attr('src', 'img/stargreen.svg');
    $(this).attr('src', 'img/stargreen.svg');
    input.val(id);
});


//********MODALS*********//
function openModal(id) {
    $('.modal').removeClass('active');

    $('.modal--overlay').addClass('active');
    $('.modal').filter(`[data-modal-id=${id}]`).addClass('active');
}

$('[data-modal-button]').on('click', function(e) {
    e.stopPropagation();
    var id = $(this).attr('data-modal-button');
    openModal(id);
});

$('[data-modal-close]').on('click', function() {
    $('.modal--overlay').removeClass('active');
    $('.modal').removeClass('active');
});
//********MODALS*********//

var slider = $('#imageGallery').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 4,
    slideMargin: 0,
    enableDrag: false,
    vertical: false,
    // vThumbWidth:50,
    thumbMargin: 12,
    // verticalHeight:295,
    currentPagerPosition: 'left',
    responsive: [{
            breakpoint: 1280,
            settings: {
                item: 1,
                slideMove: 1,
                slideMargin: 6,
                thumbItem: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                item: 1,
                slideMove: 1,
                slideMargin: 6,
                thumbItem: 1
            }
        },
    ],
    onSliderLoad: function(el) {

    }
});

$('.prev-arrow').on('click', () => {
    slider.goToPrevSlide();
});

$('.next-arrow').on('click', () => {
    slider.goToNextSlide();
});


//***AUTH****//

$('.tabs--item').on('click', function() {
    var id = $(this).data('tab-id');
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
    $(`.form`).hide();
    $(`.form[data-tab=${id}]`).show();
});