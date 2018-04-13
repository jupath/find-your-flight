const path = require('path');
const express = require('express');
const request = require('request');

require('dotenv').config({ path: '.env.token' });

const app = express();
const publicPath = path.resolve(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // For Heroku

// Get Lufthansa OAuth token
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const authOptions = {
  url: 'https://api.lufthansa.com/v1/oauth/token',
  headers: {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
  },
  form: {
    grant_type: 'client_credentials',
  },
  json: true,
};

let token;

request.post(authOptions, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    token = body.access_token;
  }
});

app.use(express.static(publicPath));

app.get('/token', (req, res) => {
  res.send({ access_token: token });
});

app.listen(port, () => {
  console.log('Server is up!');
});
