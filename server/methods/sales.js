Meteor.methods({
    'createSale':(obj)=>{
    	var test = Sales.insert(obj);

    	console.log(Sales.findOne({_id:test}));

    },
});