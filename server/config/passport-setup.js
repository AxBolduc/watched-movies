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
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.DOMAIN+"/auth/trakt/callback"
},
function(accessToken, refreshToken, params, profile, done) {
    User.findOne({username: profile.id}).then((user)=>{
        if(user){
            //user exists

            //If the token is different than the one stored in the database, update it
            if (user.token != accessToken) {
              user.token = accessToken;

              user
                .save()
                .then((savedUser) => {
                  savedUser === user;
                })
                .catch((err) => {
                  console.log(err);
                });
            }

            done(null, user);
        
        } else {
            //create user
            let expirationDate = new Date();
            expirationDate.setMonth(expirationDate.getMonth() + 3);
            new User({
              username: profile.id,
              name: profile.username,
              token: accessToken,
              refreshToken: refreshToken,
              tokenExpirationDate: expirationDate,
            })
              .save()
              .then((user) => {
                done(null, user);
              });
        }
    })

    
}));