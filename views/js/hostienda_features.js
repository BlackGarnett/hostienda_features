$(document).ready( function(){

	let features = [

		{
			id : 1,
			name: 'prueba',
			values: [
				1,
				2,
			],
		},
		{
			id : 2,
			name: 'fundas',
			values: [
				3,
				4,
				5,
				6,
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
