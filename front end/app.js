const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/map', function(req, res){
    res.sendFile(__dirname + '/googlemaptest.html');
});


app.listen(3000)