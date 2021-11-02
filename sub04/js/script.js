$(function(){
	var guide_class = 'gray';
	
	$('.guide_text').each(function(){
		var guide_text = this.defaultValue;
		var element = $(this);
		element.focus(function(){
			if(element.val()===guide_text){
				element.val('');
				element.removeClass(guide_class);
			};
		});
		element.blur(function(){
			if(element.val()===''){
				element.val(guide_text);
				element.removeClass(guide_Class);
			};
		});
		
		if(element.val()===guide_text){
			element.addClass(guide_class);
		};
	});	
});