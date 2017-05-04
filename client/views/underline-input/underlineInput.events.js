Template.underlineInput.events({
	'focus input': function(ev, template) {
		let label = template.firstNode.querySelector('label')
		label.classList.add('on-focus')
	},

	'blur input': function(ev, template) {
		let label = template.firstNode.querySelector('label')
		let inputValue = ev.currentTarget.value.trim()
		
		if (!inputValue)
			label.classList.remove('on-focus')
	}
})