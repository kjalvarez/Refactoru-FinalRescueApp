var AvailableModel = require('../models/availableDogs')

module.exports = {
	resources: function(req, res) {
		res.render('resources', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Resources'
		})

	},

	displayDogs: function(req, res) {
		AvailableModel.find({}, function (err, data) {
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
	},

	addDogForm: function (req, res) {
		res.render('addDogs', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Add a dog'
		})
	},

	addDog: function (req, res) {
		var name = req.body.name;
		var age = req.body.age;
		var breed = req.body.breed;
		var sex = req.body.sex;
		var foster = req.body.foster;
		var biography = req.body.biography; 
		var photo = req.body.photo

		collection.insert({
			"name" : name, 
			"age" : age,
			"breed" : breed,
			"sex" : sex,
			"foster" : foster,
			"biography" : biography,
			"photo" : photo
		})
	}
}  

