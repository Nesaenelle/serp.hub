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
	if($('[data-dropdown]').length && !$('[data-dropdown]')[0].contains(e.target)) {
		$('[data-dropdown]').removeClass('active');
	}

  if ($('.modal--body').length && !$('.modal--body')[0].contains(e.target)) {
      $('.modal').removeClass('active');
      $('.modal--overlay').removeClass('active');
  }

});


$('.search-input').on('input', (e)=> {
	let val = e.target.value;
	if(val) {
		$('.pandas-list .pandas-list__item').hide();
		$('.pandas-list .pandas-list__item').eq(0).show();
	} else {
		$('.pandas-list .pandas-list__item').show();
	}
});

$('.bottom-form form').on('submit', (e)=> {
	e.preventDefault();
	$('.bottom-form form input').val('');
	//show modal
  openModal('thanks');
});

$('.feedback__form').on('submit', (e)=> {
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

$('.rating img').on('click', function() {
  var input = $(this).siblings('input');
  var id =  $(this).data('id');
  $(this).parent().find('img').attr('src', 'img/star.svg');

  $(this).prevAll().attr('src', 'img/stargreen.svg');
  $(this).attr('src', 'img/stargreen.svg');
  input.val(id);
});

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


var slider = $('#imageGallery').lightSlider({
    gallery:true,
    item:1,
    loop:true,
    thumbItem:4,
    slideMargin: 0,
    enableDrag: false,
    // vThumbWidth:50,
    thumbMargin: 12,
    // verticalHeight:295,
    currentPagerPosition:'left',
    // responsive : [
    //       {
    //           breakpoint:800,
    //           settings: {
    //               item:3,
    //               slideMove:1,
    //               slideMargin:6,
    //             }
    //       },
    //       {
    //           breakpoint:480,
    //           settings: {
    //               item:2,
    //               slideMove:1
    //             }
    //       }
    //   ],
    onSliderLoad: function(el) {

    }   
});  

$('.prev-arrow').on('click', ()=> {
  slider.goToPrevSlide(); 
});

$('.next-arrow').on('click', ()=> {
  slider.goToNextSlide(); 
});