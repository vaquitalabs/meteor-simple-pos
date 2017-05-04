Template.home.helpers({
	orderProducts:()=>{
		var products = Session.get('order');
		var prodOrder = [];
		if (products.length > 0) {
			for (var i = 0; i <= products.length - 1; i++) {
				prodOrder.push({
					name:products[i].productName,
					quantity:products[i].productQuantity,
					unit:products[i].productPrice,
					subtotal:products[i].productPrice * products[i].productQuantity,
					category:products[i].productCategory
				});	
			}
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
	}
});