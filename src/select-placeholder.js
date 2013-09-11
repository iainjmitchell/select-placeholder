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
			PLACEHOLDER_VALUE = 'placeholder',
			select = $(selectElement),
			originalColor = select.css('color'),
			placeholderText = select.attr('placeholder'),
			placeholderOptionBuilder = new PlaceholderOptionBuilder(PLACEHOLDER_VALUE),
			lastSelectedValue;
		
		select
			.bind('change', itemChanged)
			.css('color', PLACEHOLDER_COLOR)
			.find('option')
				.css('color', originalColor)
				.end()
			.prepend(placeholderOptionBuilder.build(placeholderText));

		function itemChanged(){
			if (select.val() !== PLACEHOLDER_VALUE){
				lastSelectedValue = select.val();
				lookLikeOptionSelected();
			}
			else {
				select.val(lastSelectedValue);
			}
		}	

		function lookLikeOptionSelected(){
			select
				.css('color', originalColor)
				.find('option[value="' + PLACEHOLDER_VALUE + '"]')
					.css('color', PLACEHOLDER_COLOR);
		}
	};

	var PlaceholderOptionBuilder = function(placeholderValue){
		this.build = function(placeholderText){
			var option = 	
				$('<option>')
					.val(placeholderValue)
					.text(placeholderText)
					.attr('selected', true);
			lastSelectedValue = option.val();
			return option;
		}
	};
})(jQuery);