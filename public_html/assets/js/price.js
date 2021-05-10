$('.price_lower__sample_recommend_nav .item').on('click', function(){
	var tar = $(this).attr('class');
	tar = tar.replace("item", "");
	$('.price_lower__sample_recommend_nav .item').removeClass('active');
	$(this).addClass('active');
	$('.price_lower__sample_recommend_content').removeClass('active');
	$('.price_lower__sample_recommend_content.'+tar).addClass('active');
});

$('.price_lower__merit_nav .item').on('click', function(){
	var tar = $(this).attr('class');
	tar = tar.replace("item", "");
	$('.price_lower__merit_nav .item').removeClass('active');
	$(this).addClass('active');
	$('.price_lower__merit_content').removeClass('active');
	$('.price_lower__merit_content.'+tar).addClass('active');
});