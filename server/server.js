const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const APIController = require('./controller/api.controller')
const app = express();



app.use(express.static(path.join(__dirname, 'build')));


app.get('/', function (req, res) {
  res.redirect('/index.html');
});
app.get('/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'styles.css'));
});
app.get('/get-token', APIController._getToken, (req, res) => {
  res.json({ token: req.token });
});
app.listen(process.env.PORT || 3000);
