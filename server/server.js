const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const APIController = require('./controller/api.controller');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.redirect('/index.html');
});
app.get('/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'styles.css'));
});
app.get('/get-token', APIController._getToken, (req, res) => {
  return res.status(200).json({ token: req.token });
});
 app.get('/genres', APIController.getGenres, (req, res) => {
   return res.status(200).json({ genres: res.locals.genres });
 });

// app.get('/tracks', APIController._getTracks, (req, res) => {
//   return res.status(200).json({ token: req.token });
// })

// app.get('/search/artist', APIController.searchArtist, (req, res) => {
//   if (res.locals.artistId) {
//     res.json({ artistId: res.locals.artistId });
//   } else {
//     res.status(404).json({ message: 'Artist not found' });
//   }
// });
// app.get('/tracks/artist/:artistId', APIController._getTracksByArtist , (req, res) => {
//   res.json(res.locals.tracks);
// });

app.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});
module.exports = app;




