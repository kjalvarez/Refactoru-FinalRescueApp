module.exports = {
	login: function(req, res) {
		res.render('login', {
			title: 'This is the login page'
		})
	},

	index: function(req, res) {
		res.render('index', {
			title: 'Welcome to Western Dogs Rescue Volunteer Portal!'
		})
	}
}