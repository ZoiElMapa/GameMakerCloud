var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Welcome to GameMakerCloud')
})
 
app.listen(8000)
