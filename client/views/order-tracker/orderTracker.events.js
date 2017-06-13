Template.orderTracker.events({
	'click #erase-order':() => {
		order = [];
		Session.set('order',order);
	},
	'click #proceed-to-payment':() => {
		
		$('#payment-modal').css('display','block');
		var products = Session.get('order');
		Session.set('products',products);
	},
	'click #close-modal':()=>{
		$('#payment-modal').css('display','none');
	},
	'click #finish-sale':(ev)=>{
		//console.log('entro??');
		var amount = $('#payment-amount').val();
		var productsOrder = Session.get('products');
		console.log(productsOrder);
		var total = Session.get('total');
		if (amount === 0 || amount < total) {
			$('#change').text('el pago tiene que ser igual o mayor que el total').fadeIn().fadeOut(3000);
		}else if(amount >= total){
			Session.set('change',amount);
			var sale = {
				createdAt:new Date(),
				createdBy:Meteor.userId(),
				products:productsOrder,
				total:total
			};
			$('#payment-amount').val(0);
			order = [];
			Session.set('order',order);
			Meteor.call('createSale',sale);
			$('#payment-modal').css('display','none');
		}
	}
});
