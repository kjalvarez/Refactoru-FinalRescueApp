module.exports = {
	resources: function(req, res) {
		res.render('resources', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Resources'
		})

	},

	displayDogs: function(req, res) {
		res.render('currentDogs', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Adoptable dogs'
			})
		}
	}

