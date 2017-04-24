Meteor.publish('pruducts', () =>{
	return Products.find();
})