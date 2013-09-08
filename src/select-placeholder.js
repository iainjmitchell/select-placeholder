(function($, undefined){
	$.fn.selectPlaceholder = function(){
		$(this)
			.find('select[placeholder]')
			.each(function(){
				new SelectWithPlaceholder(this);	
			});
	};

	var SelectWithPlaceholder = function(selectElement){
		var select = $(selectElement),
			placeholderText = select.attr('placeholder'),
			option = buildPlaceholderOption(placeholderText);
		select.prepend(option);

		function buildPlaceholderOption(placeholderText){
			var option = 	
				$('<option>')
					.text(placeholderText)
					.attr('selected', true);
			return option;
		}
	};
})(jQuery);