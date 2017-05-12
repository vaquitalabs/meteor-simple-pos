Template.productOption.events({
	'click .add-product':(ev, template) => {
		const product = template.data;
		let order = Session.get('order');
		let exist = false;

		if (!order) order = [];

		const orderProduct = {
			id: product._id,
			name: product.name,
			unitPrice: product.price / 100,
			subtotal: product.price / 100,
			category: product.category,
			quantity: 1,
		};

		if (order.length > 0) {
			for (let i = 0; i < order.length; i++) {
				if (orderProduct.id === order[i].id) {
					exist = true;
					++order[i].quantity;
					order[i].subtotal = (product.price * order[i].quantity) / 100;
					break;
				}
			}
		}

		if (!exist) order.push(orderProduct);

		Session.set('order', order);
	},
	'click .rm-product':(ev, template) => {
		const product = template.data;
		let order = Session.get('order');
		let exist = false;

		if (order.length > 0) {
			for (let i = 0; i < order.length; i++) {
				if (product._id === order[i].id) {
					exist = true;
					--order[i].quantity;
					if (order[i].quantity === 0) order.splice(i, 1);
					break;
				}
			}
		}

		Session.set('order', order);
	},
});
