const passport = require('passport');
const TraktStrategy = require('passport-trakt');
require('dotenv').config();

passport.use(new TraktStrategy({
    clientID: process.env.client_id,
    clientSecret: process.env.client_secret,
    callbackURL: "http://127.0.0.1:3000/auth/trakt/callback"
},
function(accessToken, refreshToken, params, profile, done) {
    console.log(profile);
}));