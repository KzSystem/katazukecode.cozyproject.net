$('.price_lower__recovery_title.sp').on('click', function(){
	$(this).toggleClass('active');
	$(this).next('figure').slideToggle(200);
	$(this).next('figure').next('.text-box').slideToggle(200);
});