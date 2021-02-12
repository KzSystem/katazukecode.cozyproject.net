
$('.area__items_list h3.sp').on('click', function(){
	$(this).toggleClass('active');
	$(this).next('figure').slideToggle(200);
	$(this).next('figure').next('.text').slideToggle(200);
});
$('.area__disposal_nav li').on('click', function(){
	var tar = $(this).attr('class');
	$('.area__disposal_nav li').removeClass('active');
	$(this).addClass('active');
	$('.area__disposal_content').removeClass('active');
	$('.area__disposal_content.'+tar).addClass('active');
});
$('.area__recycling_nav li').on('click', function(){
	var tar = $(this).attr('class');
	$('.area__recycling_nav li').removeClass('active');
	$(this).addClass('active');
	$('.area__recycling_content').removeClass('active');
	$('.area__recycling_content.'+tar).addClass('active');
});
$('.area__cases_box .l_btn').on('click', function(){
	$(this).parent('.area__cases_box').addClass('active');
});