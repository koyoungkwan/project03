$(function () {
	activate_scene2();
	function activate_scene2(){
		var $content = $('#scene2_content'), $charts = $content.find('.chart');
		$content.stop(true).animate({right:0},1200,'easeInOutQuint');
		
		$charts.each(function(){
			var $chart = $(this),
			$circle_left = $chart.find('.left .circle_mask_inner').css({transform: 'rotate(0)'}),
			$circle_right = $chart.find('.right .circle_mask_inner').css({transform: 'rotate(0)'}),
			$percent_number = $chart.find('.percent_number'),
			percent_data = $percent_number.text();
			$percent_number.text(0);
			$({percent:0}).delay(1000).animate({percent:percent_data},{
				duration:1500,
				progress:function(){
					var now = this.percent,
					deg = now*360/100,
					deg_right = Math.min(Math.max(deg,0),180),
					deg_left = Math.min(Math.max(deg-180,0),180);
					$circle_right.css({transform:'rotate('+deg_right+'deg)'});
					$circle_left.css({transform:'rotate('+deg_left+'deg)'});
					$percent_number.text(Math.floor(now));
				}
			});
		});
	};
});














