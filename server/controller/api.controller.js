
const fetch = require('node-fetch');
const btoa = require('btoa');
const clientId = 'f3ffca583aa24149b6f093c60b7959b2';
const clientSecret = '4fcfec036d884a7f9c9f0bdf46042e72';

const APIController = {


    _getToken: async (req, res, next) => {
        try {
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
                  
                },
                body: 'grant_type=client_credentials'
                
            });
           
            if (!result.ok) {
                const errorText = await result.text();
                console.error('Error response from Spotify:', errorText);
                return res.status(result.status).json({ error: 'Failed to retrieve access token from Spotify', details: errorText });
            }

            const data = await result.json();
            
            if (!data || !data.access_token) {
                console.error('Invalid token response:', data);
                return res.status(400).json({ error: 'Failed to retrieve access token from Spotify' });
            }
            console.log(`post`)
            res.locals.token = data.access_token 
            next();
        } catch (error) {
            console.error('Error while fetching token:', error);
            next(error);
        }
    }
};

const _getGenres = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await result.json();
    return data.playlist.items;
}
const _getTracks = async (token, tracksEndPoint) => {
    const limit = 10;
    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });
}
module.exports = APIController;