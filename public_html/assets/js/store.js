
$('.store__visual ul').slick({
	speed: 800,
	infinite: true,
	fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
  prevArrow: '<img src="../../assets/img/arrow.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="../../assets/img/arrow.png" class="slide-arrow next-arrow">'
});
$(window).on('load', function() {
	var slider_count = $('.store__visual .slick-dots li').length;
	var w = 100 / slider_count;
	w = w + '%';
	$('.store__visual .slick-dots li').css({'width':w});
	$('.store__visual .slick-dots').append(
		'<li class="slider_num min"><span class="slider_dots_arrow prev"></span>01</li>',
		'<li class="slider_num max">0' + slider_count + '<span class="slider_dots_arrow next"></span></li>'
	);
	
	$('.store__visual .slick-dots').on('click','.slider_dots_arrow.prev',function(){
		$('.store__visual ul').slick('slickPrev');
	});
	$('.store__visual .slick-dots').on('click','.slider_dots_arrow.next',function(){
		$('.store__visual ul').slick('slickNext');
	});
});

$('.store__items_list h3.sp').on('click', function(){
	$(this).toggleClass('active');
	$(this).next('figure').slideToggle(200);
	$(this).next('figure').next('.text').slideToggle(200);
});