Meteor.methods({
    'createSale':(obj)=>{
    	Sales.insert(obj);
    },
});