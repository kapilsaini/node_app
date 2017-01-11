var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.render('demo.jade');
})

app.listen(3001, function () {
  console.log('app listening on port 3001!')
})