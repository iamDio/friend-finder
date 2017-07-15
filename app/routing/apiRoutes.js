const path = require('path');
const friendsData = require('../data/friends.js');

module.exports = (app) => {

	app.get('/api/friends', function (req,res){
		res.json(matchData)
	});


	app.post('/api/friends', function(req,res) {
		let friend = {
			name: "",
			photo: "",
			difference: 1000
		};

		let newFriend = req.body;
		let userPoints = userData.points;
		console.log(newFriend);
		res.json(newFriend);
	});
};