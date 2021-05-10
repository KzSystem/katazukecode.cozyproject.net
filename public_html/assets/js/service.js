$('.service_price__recovery_title.sp').on('click', function(){
	$(this).toggleClass('active');
	$(this).next('figure').slideToggle(200);
	$(this).next('figure').next('.text-box').slideToggle(200);
});

$('.service_purchase__flow_nav li').on('click', function(){
	var tar = $(this).attr('class');
	$('.service_purchase__flow_nav li').removeClass('active');
	$(this).addClass('active');
	$('.service_purchase__flow_content').removeClass('active');
	$('.service_purchase__flow_content.'+tar).addClass('active');
});