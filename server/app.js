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

app.get('/auth/login', (req, res)=>{
    if(req.query.code == ""){
        res.status(400).send({"error": "access code not sent"});
    }else{
        axios({
            "headers":{
                "Content-Type":"application/json"
            },
            "method":"POST",
            "url": "https://api.trakt.tv/oauth/token",
            "data": {
                'code': req.query.code,
                'client_id': process.env.client_id,
                'client_secret': process.env.client_secret,
                'redirect_uri': 'http://127.0.0.1:3000/auth/login',
                'grant_type': 'authorization_code'
            }
        }).then((resp)=>{
            res.send({"token":resp.data.access_token})
            res.send("KAPPA");
        }).catch((err)=>{
            console.error(err);
        });
    }
})

app.listen("4000", () =>{
    console.log("listening on port 4000");
})