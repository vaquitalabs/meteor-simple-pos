Template.home.events({
	'click .add-product':(ev)=>{
		var id = $(ev.target).parent().find('.product-id').val();
		var product = Products.findOne({_id:id});
		if ($('#pre-order').find('.' + product._id).length === 0) {
			$('#pre-order').append("<div class='" + product._id + "'></div>");
			$('.' + product._id).append("<div class='pre-order-product'>" + product.name + "</div>");
			$('.' + product._id).append("<div class='pre-order-product'>" + product.category + "</div>");
			$('.' + product._id).append("<div class='pre-order-product'>" + product.price/100 + "</div>");
			$('.' + product._id).append("<div val='1' class='qty'>" + 1 + "</div>"); 
		}else if($('#pre-order').find('.' + product._id).length !== 0){
			var qty = $('#pre-order .'+ product._id +' .qty');
			console.log('#pre-order .'+ product._id +' .qty');
			$('#pre-order .'+ product._id +' .qty').val(qty);
		}
	}
});