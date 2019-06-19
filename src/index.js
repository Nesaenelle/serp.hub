import './scss/style.scss'
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import './lightslider';
import moment from 'moment';
const _moment = moment(); 

$('[data-dropdown-value]').on('click', function(e) {
    e.stopPropagation();
    $(this).closest('[data-dropdown]').toggleClass('active');
});

$('[data-dropdown-item]').on('click', function(e) {
    var text = $(this).text();
    $(this).closest('[data-dropdown]').find('[data-dropdown-value]').text(text);
    $(this).closest('[data-dropdown]').removeClass('active');
});

$('.burger').on('click', function(e) {
    e.stopPropagation()
    $(this).toggleClass('opened')
    $('.dropdown-menu').toggleClass('opened')
});

$(window).on('click', function(e) {
    if ($('[data-dropdown]').length && !$('[data-dropdown]')[0].contains(e.target)) {
        $('[data-dropdown]').removeClass('active');
    }

    if ($('.modal--body').length && !$('.modal--body')[0].contains(e.target)) {
        $('.modal').removeClass('active');
        $('.modal--overlay').removeClass('active');
    }

    if ($('.burger').length && !$('.dropdown-menu')[0].contains(e.target)) {
        $('.burger').removeClass('opened')
        $('.dropdown-menu').removeClass('opened')
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
    // checkValidity(e.target);
    var controls = [...$(e.target).closest('form')[0].elements].filter(r => r.localName === 'input');
    controls.forEach(c=> {
        checkValidity(c);
    });
    var targetInput = controls.filter(r=> !r.classList.contains('success') || r.classList.contains('error'))[0];
    
    if(targetInput) {
        $('.payment__step').eq(1).removeClass('active');
    } else {
        $('.payment__step').eq(1).addClass('active');
    }
});

function checkValidity(el) {
    if (el.checkValidity()) {
        $(el).addClass('success');
        $(el).removeClass('error');
    } else {
        $(el).addClass('error');
        $(el).removeClass('success');
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
                thumbItem: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                item: 1,
                slideMove: 1,
                slideMargin: 6,
                thumbItem: 2
            }
        },
    ],
    onSliderLoad: function(el) {

    }
});


//HOME SLIDER

$('.prev-arrow').on('click', () => {
    // slider.goToPrevSlide();
    var $radios = $('.main-slider').find('input[type="radio"]');
    var $checked = $radios.filter(':checked');
    
    var index = $checked.index();
    index--;
    if(index < 0) {
        index = $radios.length - 1;
    }
    $radios.eq(index).prop('checked', true);
});

$('.next-arrow').on('click', () => {
    // slider.goToNextSlide();
    var $radios = $('.main-slider').find('input[type="radio"]');
    var $checked = $radios.filter(':checked');
    
    var index = $checked.index();
    index++;
    if(index >= $radios.length) {
        index = 0;
    }
    $radios.eq(index).prop('checked', true);
});


//***AUTH****//

$('.tabs--item').on('click', function() {
    var id = $(this).data('tab-id');
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
    $(`.form`).hide();
    $(`.form[data-tab=${id}]`).show();
});


var interval;
function startTimer(duration, fn) {
    var dur = moment.duration(duration);
    fn(dur);

    interval = setInterval(function () {
        var dur = moment.duration(duration);
        fn(dur);
        if (duration < 0) {
            clearInterval(interval);
            $('.btn--learn-more').attr('disabled', true);
            $('.pandas-list__item').addClass('disabled');
        } else {
            duration = moment.duration(duration - 1000)._milliseconds;
        }
    }, 1000);
}

const date1 = moment('6/21/2019');
const date2 = moment(new Date());
var duration = moment.duration(date1.diff(date2));

  startTimer(duration._milliseconds, (duration)=> {

      $('.action-time').each((i, item)=> {
          var hh = duration.hours();
          hh = hh < 10 ? ("0" + hh) : hh;
          var mm = duration.minutes();
          mm = mm < 10 ? ("0" + mm) : mm;
          var dd = duration.days();
          dd = dd < 10 ? ("0" + dd) : dd;
          $(item).find('.action-time--days b').text(dd);
          $(item).find('.action-time--hours b').text(hh);
          $(item).find('.action-time--minutes b').text(mm);
      });
  });
