Template.orderTracker.helpers({
	orderHeadings() {
		return [
			{
				class: 'product',
				label: 'Producto',
			},
			{
				class: 'p-unit',
				label: 'P.Unit.',
			},
			{
				class: 'p-total',
				label: 'P.Total',
			},
			{
				class: 'cant',
				label: 'Cant.',
			},
		];
	},
	orderProducts() {
		return Session.get('order');
	},
	totalOrder() {
		return Session.get('total');
	},
	changeOrder() {
		if (Session.get('change')) {
			return Session.get('change') - Session.get('total');
		}else{
			return '';
		}
	}
});
