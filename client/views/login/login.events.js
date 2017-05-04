Template.login.events({
	'submit #login-form':(ev, template)=>{
		ev.preventDefault();
		var username = template.firstNode.querySelector('input[name="username"]').value;
		var pass = template.firstNode.querySelector('input[name="password"]').value;
		Meteor.loginWithPassword(username, pass, (error)=> {
			if (error) {
				const errMsg = {
					MATCH_FAILED: 'El usuario y contraseña no coinciden...',
					OTHER_ERROR: 'Hubo un error al intentar iniciar sesión, intentalo nuevamente...',
				}

				if (error.error === 400) {
					Session.set('loginError', errMsg.MATCH_FAILED);
				}
				else {
					Session.set('loginError', errMsg.OTHER_ERROR);
				}

				return;
			}

			Router.go('/');
		});
	}
});

/*Template.login.onRendered(()=>{
	console.log(Meteor.userId());
	if (Meteor.user()) {
		Router.go('/');
	}
});*/
