import './scss/style.scss'
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

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

$('.main-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
   ]
  // centerMode: true,
  // variableWidth: true
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

function openModal(id) {
  $('.modal').removeClass('active');

  $('.modal--overlay').addClass('active');
  $('.modal').filter(`[data-modal-id=${id}]`).addClass('active');
}

$('[data-modal-button]').on('click', function(e) {
    e.stopPropagation();
    var id = $(this).attr('data-modal-button');
    // $('.modal').removeClass('active');

    // $('.modal--overlay').addClass('active');
    // $('.modal').filter(`[data-modal-id=${id}]`).addClass('active');
    openModal(id);
});

$('[data-modal-close]').on('click', function() {
    $('.modal--overlay').removeClass('active');
    $('.modal').removeClass('active');
});