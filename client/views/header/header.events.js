Template.header.events({
	'click #logout-link':(ev)=>{
		Meteor.logout(function() {
			// Redirect to login
			Router.go('/login');
		});
	}
});