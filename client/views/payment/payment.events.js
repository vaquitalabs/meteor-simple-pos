Template.payment.events({
	'click #close-modal':()=>{
		$('#payment-modal').css('display','none');
		console.log('entro??');
	}/*,
	'click window':(ev)=>{
		if (event.target == modal) {
	        $('#payment-modal').css('display','none');
	        console.log('entro??');
	    }
	}*/
});