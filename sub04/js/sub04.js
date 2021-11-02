$(function(){
	/* SNS */
	box1=$('.box1');
	box1.each(function(){
		var anchor = $(this);
		
		box1.bind('mouseenter focus',function(){
			box1.css('background-position','0px 0px');
		});
		box1.bind('mouseleave blur',function(){
			box1.css('background-position','0px -35px');
		});
	});
	
	box2=$('.box2');
	box2.each(function(){
		var anchor = $(this);
		
		box2.bind('mouseenter focus',function(){
			box2.css('background-position','-40px 0px');
		});
		box2.bind('mouseleave blur',function(){
			box2.css('background-position','-40px -35px');
		});
	});
	
	box3=$('.box3');
	box3.each(function(){
		var anchor = $(this);
		
		box3.bind('mouseenter focus',function(){
			box3.css('background-position','-80px 0px');
		});
		box3.bind('mouseleave blur',function(){
			box3.css('background-position','-80px -35px');
		});
	});
	
	box4=$('.box4');
	box4.each(function(){
		var anchor = $(this);
		
		box4.bind('mouseenter focus',function(){
			box4.css('background-position','-120px 0px');
		});
		box4.bind('mouseleave blur',function(){
			box4.css('background-position','-120px -35px');
		});
	});
	
	/* 툴팁 */
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	
	function updateBalloonPosition(x,y){
		balloon.css({left: x+15, top: y});
	};
	
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},500);
	};
	function hideBalloon(){
		balloon.stop().animate({opacity:0},500,function(){balloon.hide();});
	};
	
	$('.show_balloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX,event.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX,event.pageY);
		});
	});
	
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	
	function updateBalloonPosition(x,y){
		balloon.css({left: x+15, top: y});
	};
	
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},500);
	};
	function hideBalloon(){
		balloon.stop().animate({opacity:0},500,function(){balloon.hide();});
	};
	
	$('.onedep').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX,event.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX,event.pageY);
		});
	});
	
		/* 메뉴 */
	var menu = $('#main_lnb > ul >li');
	// menu 1뎁스 메뉴
	var pageURL = location.href;
	// pageURL = file://D:/kyk0630/lesson/08_jQuery_middle/ex05_2depth_menu/2depth_menu.html
	var activeMenu;
	// activeMenu 현재 페이지 주소와 일치하는 메뉴를 저장시킬 변수 */
	menu.on({
		mouseenter:function(){
			var tg = $(this);
			menu.find('>a').removeClass('acti');
			tg.find('>a').addClass('acti');
		},
		mouseleave:function(){
			var tg = $(this);
			tg.find('>a').removeClass('acti');
		}
	});
	menu.click(function(){
		menu.addClass('acti');
	});
	
	/* 가이드 텍스트 */
	var guide_class = 'gray';
	var active_class = 'active';
	$('.guide_text').each(function(){
		var guide_text = this.defaultValue;
		var element = $(this);
		element.focus(function(){
			if(element.val()===guide_text){
				element.val('');
				element.removeClass(guide_class);
				element.addClass(active_class);
			}		
		}).blur(function(){

			if(element.val()===''){
				element.val(guide_text);
				element.addClass(guide_class);
				element.removeClass(active_class);
			}		
		}); 
		if(element.val()===guide_text){
			element.addClass(guide_class);
			element.removeClass(active_class);
		}	
	});
	
	/* 게시판 */
	$('#section_faq').each(function(){
		var dl = $(this);
		var all_t = dl.find('.title');
		var all_con = dl.find('.content');
		
		
		all_t.click(function(){
			var dt = $(this);
			var dd = dt.parent('div').find('.content');
			all_con.hide();
			dd.show();
			all_t.css('cursor','pointer');
			dt.css('cursor','default');
		});
	});
});
