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
	
	/* 탭메뉴 */
	$('.tab_title li').click(function(){
		var i = $(this).index();
		$('.tab_title li').removeClass('on');
		$('.tab_title li').eq(i).addClass('on');
		$('.tab_con div').slideUp();
		$('.tab_con div').eq(i).slideDown();
		if($('.tab_title li').get(0)===$('.tab_title li.on').get(0)){
		return;
		};
	});
	
	/* 팝업 */
	$('#wrap .pop_close').click(function(){
		window.close();
	});
	
	/* 레이어팝업 */
	$('#popup .pop_close').click(function(){
		$('#popup').fadeOut()
	});
	
	
	
	$('.box_in .box_1').hover(
		function(){
			$('.box_in .box_1>a').stop().animate({'margin-top':'-366px'},500);
		},
		function(){
			$('.box_in .box_1>a').stop().animate({'margin-top':'0px'},500);
		}
	);
	$('.box_in .box_2').hover(
		function(){
			$('.box_in .box_2>a').stop().animate({'margin-top':'-366px'},500);
		},
		function(){
			$('.box_in .box_2>a').stop().animate({'margin-top':'0px'},500);
		}
	);
	$('.box_in .box_3').hover(
		function(){
			$('.box_in .box_3>a').stop().animate({'margin-top':'-366px'},500);
		},
		function(){
			$('.box_in .box_3>a').stop().animate({'margin-top':'0px'},500);
		}
	);
	
	/* 퀵메뉴 */
	$('.quick_icon>li').hover(
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'images/m_on_0'+num+'.png'});
		},
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'images/m_0'+num+'.png'});
		}
	);
	
	bb = true;
	$('.quick_toggle').click(function(){
		if(bb){
			$(this).addClass('quick_open').stop(true, true).animate({'margin-right':'-88px'},500);
			$('.quickmenu').stop(true, true).animate({'margin-right':'-88px'},500,function(){bb=false});
		}else{
			$(this).removeClass('quick_open').stop(true, true).animate({'margin-right':'0px'},500);
			$('.quickmenu').stop(true, true).animate({'margin-right':'0px'},500,function(){bb=true});
		}
	});
	
	/* section_left 슬라이드 배너 */
	var interval = 1000;
	$('.slideshow').each(function(){
		var _timer;
		var container = $(this);
		
		function switchImg(){
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		};
		
		function startTimer(){
			_timer=setInterval(switchImg,interval);
		};
		function stopTimer(){
			clearInterval(_timer);
		};
		startTimer();
		container.find('a').hover(
			function(){
				stopTimer();
			},
			function(){
				startTimer();
			}
		);
	});
	
	/* 슬라이드 박스 */
	var box11 = $('.slide_box11');
	var box21 = $('.slide_box21');
	var box31 = $('.slide_box31');
	var box41 = $('.slide_box41');
	
	box11.hover(
		function(){
			box11.stop().animate({'width':'1352px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'0', 'left':'1400px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'0', 'right':'-30px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'0', 'right':'-30px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box11.find('>.slide_box11_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 300, queue:false, easeing: 'easeOutCubic'});
			box11.find('>.slide_box11_theme>.promo_box_bar').css('display', 'none');
			
		},
		function(){
			box11.stop().animate({'width':'322px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'322px', 'left':'345px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'322px', 'right':'322px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'322px', 'right':'-23px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box11.find('>.slide_box11_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box11.find('>.slide_box11_theme>.promo_box_bar').css('display', 'block');
		}
	);
	box21.hover(
		function(){
			box11.stop().animate({'width':'0', 'left':'-20px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'1352px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'0', 'right':'-30px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'0', 'right':'-30px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.find('>.slide_box21_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box21.find('>.slide_box21_theme>.promo_box_bar').css('display', 'none');
		},
		function(){
			box11.stop().animate({'width':'322px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'322px', 'left':'345px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'322px', 'right':'322px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'322px', 'right':'-23px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.find('>.slide_box21_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box21.find('>.slide_box21_theme>.promo_box_bar').css('display', 'block');
		}
	);
	box31.hover(
		function(){
			box11.stop().animate({'width':'0', 'left':'-20px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'0', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'1352px', 'right':'-23px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'0', 'right':'-30px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.find('>.slide_box31_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box31.find('>.slide_box31_theme>.promo_box_bar').css('display', 'none');
		},
		function(){
			box11.stop().animate({'width':'322px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'322px', 'left':'345px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'322px', 'right':'322px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'322px', 'right':'-23px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.find('>.slide_box31_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box31.find('>.slide_box31_theme>.promo_box_bar').css('display', 'block');
		}
	);
	box41.hover(
		function(){
			box11.stop().animate({'width':'0', 'left':'-20px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'0', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'0', 'right':'-30px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'1352px', 'right':'-23px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.find('>.slide_box41_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box41.find('>.slide_box41_theme>.promo_box_bar').css('display', 'none');
		},
		function(){
			box11.stop().animate({'width':'322px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box21.stop().animate({'width':'322px', 'left':'345px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box31.stop().animate({'width':'322px', 'right':'322px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.stop().animate({'width':'322px', 'right':'-23px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box41.find('>.slide_box41_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box41.find('>.slide_box41_theme>.promo_box_bar').css('display', 'block');
		}
	);
	/* 메인 슬라이드 */
	var slide_img = $('.slider_image');
	var bg = $('.slider_bg');
	var control_btn = $('.control_btn');
	var main_txt = $('.slider_text');
	var maincurrent = 0;
	var m = maincurrent;
	var main_timer;
	
	control_btn.click(function(){
		var tg = $(this);
		i = tg.index();
		if(maincurrent == tg.index()){return;};
		control_btn.removeClass('act');
		tg.addClass('act');
		move_slide(i);
		return false;
	});
		
	function main_move(){
		main_timer=setInterval(function(){
			var i = (maincurrent+1) % 6;
			if(i === slide_img.size()){i=0;};
			if(i===bg.size()){i=0;}
			control_btn.eq(i).trigger('click');
			/* console.log(i); */
		},3000);
	};
	main_move();
	
	function move_slide(i){
		var prev_img = slide_img.eq(maincurrent);
		var next_img = slide_img.eq(i);
		var prev_bg = bg.eq(maincurrent);
		var next_bg = bg.eq(i);
		var ctext = main_txt.eq(maincurrent);
		var tnext = main_txt.eq(i);
		
		prev_img.css('left','0%').stop().animate({left:'-100%'},200);
		next_img.css('left','100%').stop().animate({left:'0%'},200);
		prev_bg.css('left','0%').stop().animate({left:'-100%'},200);
		next_bg.css('left','100%').stop().animate({left:'0%'},200);
		ctext.css({top:'0px'}).stop().fadeOut(0).animate({top:'-450px'});
		tnext.css({top:'-450px'}).stop().fadeIn(0).animate({top:'0px'});
		maincurrent = i;
	};

	
	$('#section_slideimg').hover(
		function(){
			clearInterval(main_timer);
		},
		function(){
			main_move();
		}
	);
	
	$('.lef').click(function(){
		m--;
		if(m<0){m=$('.control_btn').size()-1};
		$('.control_btn').eq(m).trigger('click');
		return false;
	});

	$('.rig').click(function(){
		m++;
		if(m==$('.control_btn').size()){m=0};
		$('.control_btn').eq(m).trigger('click');
		return false;
	});	
	/* 날씨 */
	$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&units=metric&appid=8e18302e3634084c6f6cc4c6c284fdce',function(data){
		//alert(data.city.name);
		//alert(data.list[0].main.temp_min);
		var $cTemp = data.list[3].main.temp;
		var $cHumi = data.list[3].main.humidity;
		var $cWind = data.list[3].wind.speed;
		var $cDate = data.list[3].dt_txt;
		var $wIcon = data.list[3].weather[0].icon;
		$('.ctemp').append($cTemp);
		$('.chumi').append($cHumi);
		$('.cwind').append($cWind);
		$('h4').append($cDate);
		$('.cicon').append('<img src="http://openweathermap.org/img/wn/'+$wIcon+'@2x.png" />');
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
	/* 탑배너 */
	$('.btn_popup').click(function(){
		$('#top_banner').slideUp()
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
	
	/* 하단 슬라이드 */
	var slider_img = $('.slider_img');
	var control_button = $('.control_button');
	var slidecurrent = 0;
	var s = slidecurrent;
	var section_timer;
	
	control_button.click(function(){
		var tt = $(this);
		j = tt.index();
		if(slidecurrent == tt.index()){return;};
		control_button.removeClass('active');
		tt.addClass('active');
		slidermove(j);
		return false;
	});
		
	function section_move(){
		section_timer=setInterval(function(){
			var j = (slidecurrent+1) % 6;
			if(j === slider_img.size()){j=0;};
			control_button.eq(j).trigger('click');
			/* console.log(j); */
		},3000);
	};
	section_move();
	
	function slidermove(j){
		var pre_img = slider_img.eq(slidecurrent);
		var nex_img = slider_img.eq(j);
		
		pre_img.css('left','0%').stop().animate({left:'-100%'},200);
		nex_img.css('left','100%').stop().animate({left:'0%'},200);
		slidecurrent = j;
	};

	
	$('#section_slideimg2').hover(
		function(){
			clearInterval(section_timer);
		},
		function(){
			section_move();
		}
	);
	
	$('.left').click(function(){
		s--;
		if(s<0){s=$('.control_button').size()-1};
		$('.control_button').eq(s).trigger('click');
		return false;
	});

	$('.right').click(function(){
		s++;
		if(s==$('.control_button').size()){s=0};
		$('.control_button').eq(s).trigger('click');
		return false;
	});	
	
	
		// 윈도우팝업
	if($.cookie('windowpopup_cookie') != 'no'){window.open("popup.html", "", "resizable=no, toolbar=no, width=650, height=550")};
	/* 1일동안 열지않기 - */
		// 레이드팝업
	if($.cookie('mainpopup_cookie') != 'no'){$('#popup').show();};
	$('.mainpopup_cookie').on('click',function(){
		$.cookie('mainpopup_cookie','no',{expires:1});
		$('#popup').hide();
		return false;
	});
});

/* 카운트 */
	function unit(x){ // 1의 자리 숫자
		var m = x%10
		return m 
	}
	function tenth(y){ // 10의 자리 숫자
		var m = y/10%10
		m = Math.floor(m)
		return m 
	}		
	function hund(v){ // 100의 자리 숫자
		var m = v/100
		m = Math.floor(m)
		return m 
	}
	
	// 카운트 함수 정의 
	function ddaycount(){
		imgArr = [
			'images/num0.png',
			'images/num1.png',
			'images/num2.png',
			'images/num3.png',
			'images/num4.png',
			'images/num5.png',
			'images/num6.png',
			'images/num7.png',
			'images/num8.png',
			'images/num9.png'
		]
		doomsday = new Date('October 29, 2021 23:59:59')
		//
		today = new Date()
		howfar = doomsday - today
		//document.write(howfar)
		if(howfar>0){
			setTimeout('ddaycount()',1000)
		}else{
			clearTimeout('ddaycount()')
			document.getElementById('countment').innerHTML="카운트가 종료되었습니다."
			return false
		}
		days = Math.floor(howfar/(1000*60*60*24))
		hours = Math.floor(howfar/(1000*60*60))
		mins = Math.floor(howfar/(1000*60))
		secs = Math.floor(howfar/(1000))
		d = days
		h = hours - days*24
		m = mins - hours*60
		s = secs - mins*60
		document.getElementById('day100').setAttribute('src',imgArr[hund(d)])
		document.getElementById('day10').setAttribute('src',imgArr[tenth(d)])
		document.getElementById('day1').setAttribute('src',imgArr[unit(d)])
		document.getElementById('hour10').setAttribute('src',imgArr[tenth(h)])
		document.getElementById('hour1').setAttribute('src',imgArr[unit(h)])
		document.getElementById('min10').setAttribute('src',imgArr[tenth(m)])
		document.getElementById('min1').setAttribute('src',imgArr[unit(m)])
		document.getElementById('sec10').setAttribute('src',imgArr[tenth(s)])
		document.getElementById('sec1').setAttribute('src',imgArr[unit(s)])
		
		if(d<10){d='00'+d}else if(d<100){d='0'+d}
		if(h<10){d='0'+h}
		if(m<10){d='0'+m}
		if(s<10){d='0'+s}
		
	}