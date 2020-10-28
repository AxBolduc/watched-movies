const passport = require('passport');
const TraktStrategy = require('passport-trakt');
const User = require('../models/user-model');

require('dotenv').config();

passport.serializeUser((user,done)=>{
    done(null, user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null, user);
    });
})

passport.use(new TraktStrategy({
    clientID: process.env.client_id,
    clientSecret: process.env.client_secret,
    callbackURL: "http://127.0.0.1:3000/auth/trakt/callback"
},
function(accessToken, refreshToken, params, profile, done) {
    console.log(profile);

    User.findOne({username: profile.id}).then((user)=>{
        if(user){
            //user exists
            done(null, user);
        } else {
            //create user
            new User({
                username: profile.id,
                name: profile.username
            }).save().then((user) => {
                done(null, user);
            })
        }
    })

    
}));