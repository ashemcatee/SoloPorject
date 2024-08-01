const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
  // const btoa = require('btoa');
  const clientId = 'f3ffca583aa24149b6f093c60b7959b2';
  const clientSecret = '4fcfec036d884a7f9c9f0bdf46042e72';
  const APIController = {
    _getToken: async (req, res, next) => {
      const authOptions = {
        method: 'POST',
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
        }),
      };
      console.log(authOptions);
      try {
        const response = await fetch(
          'https://accounts.spotify.com/api/token',
          authOptions
        );
        const data = await response.json();
        if (data.access_token) {
          req.token = data.access_token;
          res.locals.token = data.access_token;
          next();
        } else {
          res.status(500).json({ error: 'Failed to fetch token' });
        }
      } catch (error) {
        res.status(500).json({
          error: 'An error occurred while fetching token',
          details: error.message,
        });
      }
    },
   
    
};


  
  module.exports = APIController;

  
 
// const _getTracks = async (req, res, next) => {
//   const token = req.headers.authorization.split(' ')[1];
//   const tracksEndPoint = req.query.tracksEndPoint;
//   const limit = 18;
//   const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
//       method: 'GET',
//       headers: { 'Authorization': 'Bearer ' + token }
//   });
//   const data = await result.json();
//   res.locals.tracks = data.tracks.items;
//   return next();
// }
// const _searchArtist = async (req, res, next) => {
//   const token = req.headers.authorization.split(' ')[1];
//   const artistName = req.query.artistName;
//   const result = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`, {
//       method: 'GET',
//       headers: { 'Authorization': 'Bearer ' + token }
//   });
//   const data = await result.json();
//   if (data.artists.items.length > 0) {
//     res.locals.artistId = data.artists.items[0].id;
//   } else {
//     res.locals.artistId = null;
//   }
//   return next();
// }


// // // const _getTracksByArtist = async (req, res, next) => {
// // //   const token = req.headers.authorization.split(' ')[1];
// //   const artistId = req.params.artistId;
// //   const result = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
// //       method: 'GET',
// //       headers: { 'Authorization': 'Bearer ' + token }
// //   });
// //   const data = await result.json();
// //   res.locals.tracks = data.tracks;
// //   return next();
// // }

// const _getTrackTempo = async (req, res, next) => {
//   const token = req.headers.authorization.split(' ')[1];
//   const trackId = req.params.trackId;
//   const result = await fetch(`https://api.spotify.com/v1/audio-features/${trackId}`, {
//       method: 'GET',
//       headers: { 'Authorization': 'Bearer ' + token }
//   });
//   const data = await result.json();
//   res.locals.tempo = data.tempo;
//   return next();
// }

// module.exports = {
//   getTracks: _getTracks,
//   // getTracksByArtist: _getTracksByArtist,
//   getTrackTempo: _getTrackTempo,
//   searchArtist: _searchArtist,
// };


// const fetch = require('node-fetch');
// const btoa = require('btoa');
// const clientId = 'f3ffca583aa24149b6f093c60b7959b2';
// const clientSecret = '4fcfec036d884a7f9c9f0bdf46042e72';

// const APIController = {


//     _getToken: async (req, res, next) => {
//         try {
//             const result = await fetch('https://accounts.spotify.com/api/token', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
                  
//                 },
//                 body: 'grant_type=client_credentials'
                
//             });
           
//             if (!result.ok) {
//                 const errorText = await result.text();
//                 console.error('Error response from Spotify:', errorText);
//                 return res.status(result.status).json({ error: 'Failed to retrieve access token from Spotify', details: errorText });
//             }

//             const data = await result.json();
            
//             if (!data || !data.access_token) {
//                 console.error('Invalid token response:', data);
//                 return res.status(400).json({ error: 'Failed to retrieve access token from Spotify' });
//             }
//             console.log(`post`)
//             res.locals.token = data.access_token 
//             next();
//         } catch (error) {
//             console.error('Error while fetching token:', error);
//             next(error);
//         }
//     }
// };

// module.exports = APIController;