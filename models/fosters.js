var mongoose=require('mongoose');

var FosterSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	state: String,
	zip: String,
	phone: String,
	hasDog: String
});

var FosterModel = module.exports = mongoose.model('coloradofoster', FosterSchema);
