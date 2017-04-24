Template.home.onRendered(()=>{
	if (!Meteor.user()) {
		Router.go('/login');
	}
});