// Get all of our friend data
var data = require('../explore.json');

exports.view = function(req, res){
	console.log(data);
	console.log("TEST");
	res.render('rateform', data);
		/*'name': 'Fake friend',
		'imageURL': 'http://lorempixel.com/500/500/people',
		'description': 'All my friends are imaginary'*/
};