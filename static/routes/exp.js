var data = require('../explore.json');

exports.view = function(req, res) { 
	console.log("Explore page testing...")
	console.log(data);
	res.render('explore', data);

}