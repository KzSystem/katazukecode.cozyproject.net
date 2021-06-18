
// home-main_visual-slider
$('.lp__slider').slick({
	speed: 800,
	infinite: true,
	fade: false,
  autoplay: true,
  autoplaySpeed: 6000,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
  centerPadding: 'calc((100% - 915px) / 2)',
	arrows: false,
	dots: true,
  responsive: [
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 1,
				centerPadding: '4vw',
      }
		}
	]
});

$(window).on('load', function() {
	var slider_count = $('.lp__slider .slick-dots li').length;
	var w = 100 / slider_count;
	w = w + '%';
	$('.lp__slider .slick-dots li').css({'width':w});
	$('.lp__slider .slick-dots').append(
		'<li class="slider_num min"><span class="slider_dots_arrow prev"></span>01</li>',
		'<li class="slider_num max">0' + slider_count + '<span class="slider_dots_arrow next"></span></li>'
	);
	
	$('.lp__slider .slick-dots').on('click','.slider_dots_arrow.prev',function(){
		$('.lp__slider').slick('slickPrev');
	});
	$('.lp__slider .slick-dots').on('click','.slider_dots_arrow.next',function(){
		$('.lp__slider').slick('slickNext');
	});
});