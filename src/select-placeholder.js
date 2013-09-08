(function($, undefined){
	$.fn.selectPlaceholder = function(){
		$(this)
			.find('select[placeholder]')
			.each(function(){
				new SelectWithPlaceholder(this);	
			});
	};

	var SelectWithPlaceholder = function(selectElement){
		var PLACEHOLDER_COLOR = 'rgb(176, 176, 176)',
			select = $(selectElement),
			originalColor = select.css('color'),
			placeholderText = select.attr('placeholder'),
			option = buildPlaceholderOption(placeholderText);
		
		select
			.css('color', PLACEHOLDER_COLOR)
			.find('option')
				.css('color', originalColor)
				.end()
			.prepend(option);

		function buildPlaceholderOption(placeholderText){
			var option = 	
				$('<option>')
					.text(placeholderText)
					.attr('selected', true);
			return option;
		}
	};
})(jQuery);