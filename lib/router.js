Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/',{
	template:'home',
	waitOn(){
		return Meteor.subscribe('products');
	},
	data(){
		return{
			productTraditional:Products.find({category:{$eq:'Tradicionales'}}),
			productChorreado:Products.find({category:{$eq:'Chorreados'}}),
			productExtra:Products.find({category:{$eq:'Extras'}})

		}
	},
	onBeforeAction:function(){
		if (!Meteor.user()) {
	  	  this.redirect('/login');
	 	} else {
	      this.next();
	  }
	},
});

Router.route('/login',{
	template:'login',
	/*action: function () {
	  this.render();
	},*/
	onBeforeAction:function(){
		if (Meteor.user()) {
	  	  this.redirect('/');
	 	} else {
	      this.next();
	  }
	},
});
