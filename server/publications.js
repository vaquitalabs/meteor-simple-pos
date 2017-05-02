Meteor.publish('products', () =>{
	return Products.find();
})