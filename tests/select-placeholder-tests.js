describe('When a developer wants to see placeholder text on selectbox', function(){
	beforeEach(function(){
    	$('body')
    		.append('<div id="test-fixture"><select><option>An option</option></select></div>');
	});

	afterEach(function(){
		$('#test-fixture').remove();
	});

	describe('And has NOT applied a placeholder attribute to the select', function(){
		it('Then the select is NOT changed', function(){
			var testFixture = $('#test-fixture');
				selectHtml = testFixture.html();
			testFixture.selectPlaceholder();
			testFixture.html().should.equal(selectHtml);
		});
	});

	describe('And has applied a placeholder attribute to the select', function(){
		it('Then an option with a value of the placeholder attribute is added', function(){
			var placeholderAttributeValue = 'Hello',
				select = $('select');
			select.attr('placeholder', placeholderAttributeValue);
			$('#test-fixture').selectPlaceholder();
			select
				.find('option[value="'+ placeholderAttributeValue + '"]')
				.length.should.equal(1);
		});

		it('Then the added placeholder option is first', function(){
			var placeholderAttributeValue = 'Hello',
				select = $('select');
			select.attr('placeholder', placeholderAttributeValue);
			$('#test-fixture').selectPlaceholder();
			select
				.find('option:first')
				.val().should.equal(placeholderAttributeValue);
		});

		it('Then the added placeholder option is selected', function(){
			var placeholderAttributeValue = 'Hello',
				select = $('select');
			select.attr('placeholder', placeholderAttributeValue);
			$('#test-fixture').selectPlaceholder();
			select
				.find('option:first')
				.is(':selected').should.equal(true);
		});
	});

});

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
					.val(placeholderText)
					.attr('selected', true);
			return option;
		}
	};
})(jQuery);