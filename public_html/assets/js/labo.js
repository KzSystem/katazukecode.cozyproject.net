
// home-main_visual-slider
$('#labo__head_slider').slick({
	speed: 800,
	infinite: true,
	fade: false,
  autoplay: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
  centerPadding: '108px',
	arrows: false,
	dots: true,
  prevArrow: '<img src="../../assets/img/arrow.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="../../assets/img/arrow.png" class="slide-arrow next-arrow">',
  responsive: [
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 1,
				centerPadding: '40px',
      }
		}
	]
});

$(window).on('load', function() {
	var slider_count = $('#labo__head_slider .slick-dots li').length;
	var w = 100 / slider_count;
	w = w + '%';
	$('#labo__head_slider .slick-dots li').css({'width':w});
	$('#labo__head_slider .slick-dots').append(
		'<li class="slider_num min"><span class="slider_dots_arrow prev"></span>01</li>',
		'<li class="slider_num max">0' + slider_count + '<span class="slider_dots_arrow next"></span></li>'
	);
	
	$('#labo__head_slider .slick-dots').on('click','.slider_dots_arrow.prev',function(){
		$('#labo__head_slider').slick('slickPrev');
	});
	$('#labo__head_slider .slick-dots').on('click','.slider_dots_arrow.next',function(){
		$('#labo__head_slider').slick('slickNext');
	});
});