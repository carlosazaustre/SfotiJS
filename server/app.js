'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('appPath', 'client');
app.use(express.static(path.join(__dirname, '../client')));

var routes = require('./routes/urls');

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port: ' + app.get('port'));
});
