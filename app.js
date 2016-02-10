var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/*/case-study-pepeza', function(req, res) {
  res.sendFile(__dirname + '/pepeza.html');
});

app.listen(8081, function() {
  console.log('App listening on port 3000');
});
app.use("/public",express.static('/public'));

app.use('/', express.static(__dirname + '/'));


