var order = [];
var filter = {}

Template.home.events({
	'click .add-product':(ev)=>{
		var id = $(ev.target).parent().find('.product-id').val();
		var product = Products.findOne({_id:id});
		var orderProduct = {
			productName:product.name,
			productPrice:product.price/100,
			productId:product._id,
			productCategory:product.category,
			productQuantity:1
		};
		var exist = false;
		if (order.length > 0) {
			for (var i = 0; i <= order.length - 1; i++) {
				if (orderProduct.productId === order[i].productId) {
					exist = true;
					order[i].productQuantity ++;
					break;
				}
			}
			
		}

		if (!exist) {
			order.push(orderProduct);
		}

		Session.set('order',order);

	},
	'click .rm-product':(ev)=>{
		var id = $(ev.target).parent().find('.product-id').val();
		var exist = false;
		if (order.length > 0) {
			for (var i = 0; i <= order.length - 1; i++) {
				if (id === order[i].productId) {
					exist = true;
					order[i].productQuantity --;
					if (order[i].productQuantity === 0) {
						order.splice(i,1);
					}
					break;
				}
			}
			
		}
		Session.set('order',order);
	}
});
