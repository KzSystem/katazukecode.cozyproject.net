// JavaScript Document

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
$('.has_child').on('click', function(){
	$(this).toggleClass('active');
	$(this).next('.child').slideToggle(200);
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
	var tar_name = $(this).data('modal');	
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
	ytPlayer.pauseVideo();
	setTimeout(function(){
		$('#l_modal').fadeOut(100);
	}, 100);
});
$('.l_modal__bg').on('click', function(){
	$('.l_modal__content').fadeOut(100);
	ytPlayer.pauseVideo();
	setTimeout(function(){
		$('#l_modal').fadeOut(100);
	}, 100);
});

// スムーススクロール
$(function(){
  $('a[href^=#]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


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


function change_scale(){
	var pointWidth_pc = 1366;
	var pointWidth_sp = 680;
	var windowWidth = $(window).width();
	var zoom = 1;
	if(windowWidth < pointWidth_pc){
		if(windowWidth > pointWidth_sp){
			zoom = windowWidth / pointWidth_pc;
		}else{
			zoom = 1;
		}
		$('body').css({'zoom':zoom});
	}else{
		$('body').css({'zoom':'1'});
	}
}
$(window).on('load', function() {
	change_scale();
});
window.addEventListener("resize", function() {
	change_scale();
});