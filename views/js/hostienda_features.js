$(document).ready( function(){

	let features = [

		{
			id : 1,
			name: 'tablas',
			values: [
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				30,
				21,
				13,
				58,
				57
			],
		},
		{
			id : 2,
			name: 'foil',
			values: [
				6,
				7,
				9,
				16,
				60,
				61,
				62,
				29,
			],
		},
		{
			id : 3,
			name: 'cometas + wing',
			values: [
				6,
				7,
				14,
				9,
				10,
				19,
				57,
			],
		},
		{
			id : 4,
			name: 'velas + aparejos',
			values: [
				6,
				7,
				14,
				9,
				15,
				16,
				17,
				18,
				19,
				21,
			],
		},
		{
			id : 5,
			name: 'mastiles + barras',
			values: [
				6,
				7,
				22,
				23,
				24,
			],
		},
		{
			id : 6,
			name: 'botavaras',
			values: [
				6,
				7,
				9,
				25,
				26,
				10,
			],
		},
		{
			id : 7,
			name: 'acc. windsurf',
			values: [
				6,
				7,
				22,
				10,
				13,
				23,
				29,
			],
		},
		{
			id : 8,
			name: 'accesorios',
			values: [
				6,
				7,
				19,
				23,
				30,
				22,
				35,
				27,
			],
		},
		{
			id : 9,
			name: 'textil',
			values: [
				6,
				7,
				19,
				27,
				30,
			],
		},
		{
			id : 10,
			name: 'fundas',
			values: [
				6,
				7,
				11,
				12,
			],
		},

	];

	$.each(features, function(index,item){
		$('#hostienda_features_select').append(new Option(item.name.toUpperCase(), item.id,));
	});
	$('#hostienda_features_select').on('change', function(){

		feature = features.find(feature => feature.id == $(this).val());
			if($('.row.product-feature').length>0){
				$('.row.product-feature').remove();
			}

		$.each(feature.values, function(index, el) {
			$('#add_feature_button').click();
			$('.feature-selector.custom-select.select2-hidden-accessible').last().val(el).trigger('change');
		});
	});

});
