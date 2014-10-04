exports.home = function (req, res) {

	res.sendFile(path.join(__dirname, '../client', 'index.html'));
	
};