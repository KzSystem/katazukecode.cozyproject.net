
// nav_btn
$('#nav_btn').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('.l_header__nav.sp').removeClass('active');
		$(this).children('.text').text('メニュー');
	}else{
		$(this).addClass('active');
		$('.l_header__nav.sp').addClass('active');
		$(this).children('.text').text('閉じる');
	}
});

// pull_down
$('.pull_down').on('click', function(){
	$(this).toggleClass('active');
	$(this).next('.child').slideToggle(200);
});
$('.l_footer .has_child').on('click', function(event){
    var w = $(window).width();
    var x = 680;
    if (w <= x) {
			event.preventDefault();
			$(this).toggleClass('active');
			$(this).next('.child').slideToggle(200);
		}
});
$('.faq_a').on('click', function(){
	$(this).toggleClass('active');
	$(this).children('.ico-slide_down').toggleClass('active');
	$(this).next('.faq_q').slideToggle(200);
});
$('.blog__aside_title').on('click', function(){
	let tar = $(this);
	if(tar.hasClass('active')){
		tar.next('ul').slideUp(200);
		setTimeout(function(){
			tar.removeClass('active');
		},300);
	}else{
		tar.addClass('active');
		tar.next('ul').slideDown(200);
	}
});

// .service_box
$('.l_service__box h3').on({
	'mouseenter': function() {
		$(this).parents('.l_service__box').children('figure').addClass('hover');
	},
	'mouseleave': function() {
		$(this).parents('.l_service__box').children('figure').removeClass('hover');
	}
});

// fixed_nav
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
		if ( winScrollTop > 600 ) {
			$('#l_fixed_nav').addClass('active');
			/*if (winScrollTop < startPos) {
				$('#l_fixed_nav').addClass('active');
			}else{
				$('#l_fixed_nav').removeClass('active');
			}*/
		}else{
			$('#l_fixed_nav').removeClass('active');
		}
    startPos = winScrollTop;
});

// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
	ytPlayer = new YT.Player(
		'youtube_official_movie', // 埋め込む場所の指定
		{
			width: 908, // プレーヤーの幅
			height: 513, // プレーヤーの高さ
			videoId: 't3OouYgmjNs' // YouTubeのID
		}
	);
}

// モーダル
$('.modal_open').on('click', function(){
	var click_obj = $(this);
	var tar_name = $(this).data('modal');	
	if(click_obj.hasClass('modal_white')){
		$('#l_modal').addClass('white');
	}else{
		$('#l_modal').removeClass('white');
	}
	if($(this).hasClass('in_modal')){
		$('.l_modal__content').fadeOut(100);
		setTimeout(function(){
			$('#modal_' + tar_name).fadeIn(100);
		}, 100);
	}else{
		$('#l_modal').fadeIn(100);
		setTimeout(function(){
			$('#modal_' + tar_name).fadeIn(100);
			if(tar_name == "official_movie"){
				 ytPlayer.playVideo();
			}
		}, 100);
	}
});
$('.l_modal__close').on('click', function(){
	$('.l_modal__content').fadeOut(100);
	if($('#youtube_official_movie').length){
		ytPlayer.pauseVideo();
	}
	setTimeout(function(){
		$('#l_modal').fadeOut(100);
	}, 100);
});
$('.l_modal__bg').on('click', function(){
	$('.l_modal__content').fadeOut(100);
	if($('#youtube_official_movie').length){
		ytPlayer.pauseVideo();
	}
	setTimeout(function(){
		$('#l_modal').fadeOut(100);
	}, 100);
});
$('.l_modal__content a').on('click', function(){
	$('.l_modal__content').fadeOut(100);
	setTimeout(function(){
		$('#l_modal').fadeOut(100);
	}, 100);
});

// スムーススクロール
$(function(){
  $('a[href^=#]').click(function(){
    var adjust = 0;
		if (window.matchMedia('(max-width: 680px)').matches) {
			adjust = -20;
		}else{
			adjust = -60;
			if($('#storeList').length){
				adjust = -100;
			}
		}
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// タブレット・スマホでホバーイベントをさせない
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;
 
if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;
 
            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;
 
                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}