var order = [];

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
	},
	'click #erase-order':()=>{
		order = [];
		Session.set('order',order);
	},'click #set-order':()=>{
		var amount = $('#payment-amount').val();
		var productsOrder = Session.get('products');
		var total = Session.get('total');
		if (amount === 0 || amount < total) {
			$('#change').text('el pago tiene que ser igual o mayor que el total').fadeIn().fadeOut(3000);
		}else if(amount >= total){
			Session.set('change',amount);
			var sale = {
				createdAt:new Date(),
				day:moment().format('dd/mm/yyyy'),
				createdBy:Meteor.userId(),
				products:productsOrder,
				total:total
			};
			$('#payment-amount').val(0);
			order = [];	
			Session.set('order',order);
			Meteor.call('createSale',sale);
		}
	}
});
