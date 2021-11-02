$(function(){
/* 	$('#wrap').click(function(){
		$('#wrap').fadeIn()
	}); */
	$('#wrap .pop_close').click(function(){
		window.close();
	});
	/* 1일동안 열지않기 - */
	$('.windowpopup_cookie').on('click',function(){
		$.cookie('windowpopup_cookie','no',{expires:1});
		window.close();
		return false;
	});
});