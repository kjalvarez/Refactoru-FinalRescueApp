module.exports = {
	login: function(req, res) {
		res.render('login', {
			title: 'Western Dogs Rescue of Colorado'
		})
	},

	index: function(req, res) {
		res.render('index', {
			title: 'Welcome to Western Dogs Rescue Volunteer Portal!'
		})
	}
}