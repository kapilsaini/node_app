var express = require('express')
var app = express()
var request = require('request')

app.get('/', function (req, res) {
  res.render('demo.jade');
})
app.get('/products/', function (req, res) {
  res.render('products.jade', { currentURL:'products'});
})
app.get('/inventory', function (req, res) {
  res.render('inventory.jade', { currentURL:'inventory' });
})
app.get('/feedback', function (req, res) {
  request('http://127.0.0.1:9010/feedbacks', function (error, response, body) {
  	console.log("error: " + error)
  	console.log("response: " + response)
  	console.log("body: " + JSON.parse(body))
    if (!error && error != undefined && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.render('feedback.jade', {currentURL:'feedback', data: info}); 
    }
  })
})

app.listen(5001, function () {
  console.log('app listening on port 5001!')
})
