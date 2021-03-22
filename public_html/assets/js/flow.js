
$('.flow__details_nav li').on('click', function(){
	var tar = $(this).attr('class');
	$('.flow__details_nav li').removeClass('active');
	$(this).addClass('active');
	$('.flow__details_box').removeClass('active');
	$('.flow__details_box.'+tar).addClass('active');
});