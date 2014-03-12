var AvailableModel = require('../models/availableDogs')

module.exports = {
	resources: function(req, res) {
		res.render('resources', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Resources'
		})

	},

	displayDogs: function(req, res) {
		AvailableModel.find({}, function(err, data) {
			console.log('Error test', err)
			console.log(data);
			res.render('currentDogs', {
				dogs: data, 
				title: 'Western Dogs Rescue of Colorado',
				title2: 'Adoptable dogs'
			})
		})
	},

	locator: function(req, res) {
		res.render('locate', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Locator'
		})
	}
}  

