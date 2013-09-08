describe('When a developer wants to see placeholder text on selectbox', function(){
	beforeEach(function(){
    	$('body')
    		.append('<div id="test-fixture"><select><option>An option</option></select></div>');
	});

	afterEach(function(){
		$('#test-fixture').remove();
	});

	describe('And has applied a placeholder attribute to the select box', function(){
		it('Then an option with a value of the placeholder attribute is added', function(){
			var placeholderAttributeValue = 'Hello',
				select = $('select');
			select.attr('placeholder', placeholderAttributeValue);
			$('#test-fixture').selectPlaceholder();
			select
				.find('option[value="'+ placeholderAttributeValue + '"]')
				.length.should.equal(1);
		});

	});

});

$.fn.selectPlaceholder = function(){
	$(this)
		.find('select')
		.each(function(){
			var select = $(this),
				placeholderText = select.attr('placeholder'),
				option = $('<option>').val(placeholderText);
			select.append(option);
		});
};