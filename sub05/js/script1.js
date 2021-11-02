jQuery(document).ready(function(){
	var board = $('#board');
	$.ajax({
		url:'data1.xml',
		dataTape:'xml',
		success:function(xml){
			var wrap = $(xml);
			wrap.find('click').each(function(){
				var click = $(this);
				var text_no = click.find('no').text();
				var text_title = click.find('title').text();
				var text_name = click.find('name').text();
				var text_date = click.find('date').text();

				
				var tr = $('<div class="click fl cf" />');
				var no = $('<div class="no" />').html(text_no);
				var title = $('<div class="title" />').html(text_title);
				var name = $('<div class="name" />').html(text_name);
				var date = $('<div class="date" />').html(text_date);
				tr.append(no);
				tr.append(title);
				tr.append(name);
				tr.append(date);
				board.append(tr);

				
				click.find('content_wrap').each(function(){
					var content_wrap = $(this);
					var text_subject = click.find('subject').text();
					var text_content = click.answer('content').text();
					
					var ts = $('<div class="content_wrap cf"/>');
					var subject = $('<div class="subject" />').html(text_subject);
					var content = $('<div class="content" />').html(text_content);

					
					ts.append(subject);
					ts.append(content);
					board.append(ts);
					
				
				});			

			});
				
			$('#board').each(function(){
				var dl = $(this);
				var all_t = dl.find('.title2');
				var all_con = dl.find('.content_wrap');
				
				
				all_t.click(function(){
					var dt = $(this);
					var dd = dt.parent('div').find('.content_wrap');
					all_con.hide();
					dd.show();
					all_t.css('cursor','pointer');
					dt.css('cursor','default');
				});
			});

		}
	});
});