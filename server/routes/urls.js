var express = require('express'),
	router	= express.Router(),
	indexController = require('./controllers/indexCtrl');

router
	.route('/')
		.get(indexController.home);

module.exports = router;