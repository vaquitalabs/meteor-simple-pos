Template.orderTracker.events({
	'click #erase-order':() => {
		order = [];
		Session.set('order',order);
	},
	'click #proceed-to-payment':() => {
		
		$('#payment-modal').css('display','block');
		/*console.log(modal);
		modal.style.display = "block";*/
	},
	'click #close-modal':()=>{
		$('#payment-modal').css('display','none');
		console.log('entro??');
	},
	'click #finish-sale':(ev)=>{
		console.log('entro??');
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
