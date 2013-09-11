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
			option = buildPlaceholderOption(placeholderText),
			lastSelectedValue;
		
		select
			.bind('change', itemChanged)
			.css('color', PLACEHOLDER_COLOR)
			.find('option')
				.css('color', originalColor)
				.end()
			.prepend(option);

		function buildPlaceholderOption(placeholderText){
			var option = 	
				$('<option>')
					.val('placeholder')
					.text(placeholderText)
					.attr('selected', true);
			lastSelectedValue = option.val();
			return option;
		}

		function itemChanged(){
			if (select.val() !== 'placeholder'){
				lastSelectedValue = select.val();
				lookEnabled();
			}
			else {
				console.log('placeholder');
				select.val(lastSelectedValue);
			}
		}	

		function lookEnabled(){
			select
				.css('color', originalColor)
				.find('option[value="placeholder"]')
					.css('color', PLACEHOLDER_COLOR);
		}	
	};
})(jQuery);