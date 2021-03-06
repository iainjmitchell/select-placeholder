describe('When a developer wants to see placeholder text on selectbox', function(){
	beforeEach(function(){
    	$('body')
    		.append('<div id="test-fixture"><select><option value="2">An option</option></select></div>');
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
		it('Then the added placeholder option is first', function(){
			var placeholderAttributeValue = 'Hello',
				select = $('select');
			select.attr('placeholder', placeholderAttributeValue);
			$('#test-fixture').selectPlaceholder();
			select
				.find('option:first')
				.text().should.equal(placeholderAttributeValue);
		});

		it('Then the added placeholder option is selected', function(){
			var select = $('select');
			select.attr('placeholder', 'aValue');
			$('#test-fixture').selectPlaceholder();
			select
				.find('option:first')
				.is(':selected').should.equal(true);
		});

		it('Then the select text is greyed out', function(){
			var placeholderColor = 'rgb(176, 176, 176)',
				select = $('select');
			select.attr('placeholder', 'aValue');
			$('#test-fixture').selectPlaceholder();
			select.css('color').should.equal(placeholderColor);
		});

		it('Then the non-placeholder options are NOT greyed out', function(){
			var defaultColor = 'rgb(0, 0, 0)',
				select = $('select');
			select.attr('placeholder', 'aValue');
			$('#test-fixture').selectPlaceholder();
			select
				.find('option[value="2"]')
				.css('color').should.equal(defaultColor);
		});

		describe('And when user selects an option', function(){
			it('Then select text returns to original color', function(){
				var defaultColor = 'rgb(0, 0, 0)',
					select = $('select');
				select.attr('placeholder', 'aValue');
				$('#test-fixture').selectPlaceholder();
				select
        			.val('2')
        			.trigger('change');
        		select.css('color').should.equal(defaultColor);	
			});

			it('Then placeholder option remains greyed out', function(){
				var placeholderColor = 'rgb(176, 176, 176)',
					select = $('select');
				select.attr('placeholder', 'aValue');
				$('#test-fixture').selectPlaceholder();
				select
        			.val('2')
        			.trigger('change');
        		select
					.find('option:first')
        			.css('color').should.equal(placeholderColor);	
			});

			describe.only('And when user tries to select the placeholder option', function(){
				it('Then the value does not change', function(){
					var select = $('select');
					select.attr('placeholder', 'aValue');
					$('#test-fixture').selectPlaceholder();
					select
        				.val('2')
        				.trigger('change')
        				.val('placeholder')
        				.trigger('change');
					 $('select').val().should.equal('2');
				});
			});
		});


	});

});