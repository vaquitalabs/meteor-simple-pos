Template.login.events({
	'submit #login-form':(ev)=>{
		ev.preventDefault();
		var username = $('#login-username').val();
		var pass = $('#login-password').val();
		Meteor.loginWithPassword(username, pass, (error)=> {
            if (Meteor.user()) {
        		Router.go('/');
            }else{
            	console.log('There is an error', error);
            }
        });
	}
});

/*Template.login.onRendered(()=>{
	console.log(Meteor.userId());
	if (Meteor.user()) {
		Router.go('/');
	}
});*/
