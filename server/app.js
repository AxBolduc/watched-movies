const express=require('express');
const cors = require('cors')
const axios = require('axios');
const passport = require('passport');
const passportSetip = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

require('dotenv').config()

const app = express();
app.use(cors());

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.cookie_key]
}))

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to db
mongoose.connect(process.env.db_string, ()=>{
    console.log("Connected to db");
})

app.get('/auth/trakt', passport.authenticate('trakt'));
app.get('/auth/trakt/callback', passport.authenticate('trakt', {failureRedirect: "/"}), (req, res) =>{
    res.redirect('/');
});
app.get('/auth/user', (req, res) =>{
    if(req.user){
        res.status(200).send({"user": req.user.username});
    }else{
        res.status(400).send({"error": "Not Logged in"});
    }
})

app.listen("4000", () =>{
    console.log("listening on port 4000");
})