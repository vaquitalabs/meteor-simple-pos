Template.login.helpers({
	formInputs() {
		const username = {
			label: 'Usuario',
			name: 'username',
			type: 'text',
		}

		const password = {
			label: 'Contraseña',
			name: 'password',
			type: 'password',
		}

		return [ username, password ]
	},

	loginError() {
		return Session.get('loginError')
	}
})