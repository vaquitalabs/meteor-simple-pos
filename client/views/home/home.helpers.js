Template.home.helpers({
	orderProducts:()=>{
		var products = Session.get('order');
		var prodOrder = [];
		if (products.length > 0) {
			for (var i = 0; i <= products.length - 1; i++) {
				prodOrder.push({
					id:products[i].productId,
					name:products[i].productName,
					quantity:products[i].productQuantity,
					unit:products[i].productPrice,
					subtotal:products[i].productPrice * products[i].productQuantity,
					category:products[i].productCategory
				});	
			}
			Session.set('products',prodOrder);
		}

		var total = 0;
		if (prodOrder.length > 0) {
			for (var i = 0; i <= prodOrder.length - 1; i++) {
				total = total + prodOrder[i].subtotal;
			}
		}
		Session.set('total',total);
		return prodOrder;
	},
	totalOrder:()=>{
		return Session.get('total');
	},
	changeOrder:()=>{
		if (Session.get('change')) {
			return Session.get('change') - Session.get('total');
		}else{
			return '';
		}
	}
});