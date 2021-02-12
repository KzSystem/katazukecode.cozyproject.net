
$('.shop_detail__items_list h3.sp').on('click', function(){
	$(this).toggleClass('active');
	$(this).next('figure').slideToggle(200);
	$(this).next('figure').next('.text').slideToggle(200);
});

$('.faq_a').on('click', function(){
	$(this).toggleClass('active');
	$(this).children('.ico-slide_down').toggleClass('active');
	$(this).next('.faq_q').slideToggle(200);
});