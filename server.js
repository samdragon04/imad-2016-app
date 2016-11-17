var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/ui/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/Ackno', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Ackno.html'));
});

app.get('/ui/comingsoon', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comingsoon.html'));
});

app.get('/ui/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/2-banner.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2-banner.png'));
});

app.get('/ui/comingsoon', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comingsoon.png'));
});

app.get('/ui/thankyou', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'thankyou.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
