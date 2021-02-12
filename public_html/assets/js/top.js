
// home-main_visual-slider
$('.top__slider ul').slick({
	speed: 800,
	infinite: true,
	fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
  prevArrow: '<img src="assets/img/arrow.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="assets/img/arrow.png" class="slide-arrow next-arrow">'
});

$(window).on('load', function() {
	var slider_count = $('.top__slider .slick-dots li').length;
	var w = 100 / slider_count;
	w = w + '%';
	$('.top__slider .slick-dots li').css({'width':w});
	$('.top__slider .slick-dots').append(
		'<li class="slider_num min"><span class="slider_dots_arrow prev"></span>01</li>',
		'<li class="slider_num max">0' + slider_count + '<span class="slider_dots_arrow next"></span></li>'
	);
	
	$('.top__slider .slick-dots').on('click','.slider_dots_arrow.prev',function(){
		$('.top__slider ul').slick('slickPrev');
	});
	$('.top__slider .slick-dots').on('click','.slider_dots_arrow.next',function(){
		$('.top__slider ul').slick('slickNext');
	});
});