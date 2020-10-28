const express=require('express');
const cors = require('cors')
const axios = require('axios');
const passport = require('passport');
const passportSetip = require('./config/passport-setup');

require('dotenv').config()

const app = express();
app.use(cors());

app.get('/auth/trakt', passport.authenticate('trakt'));
app.get('/auth/trakt/callback', passport.authenticate('trakt', {failureRedirect: "/"}), (req, res) =>{
    res.redirect('/');
});

app.listen("4000", () =>{
    console.log("listening on port 4000");
})