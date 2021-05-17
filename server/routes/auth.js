const { default: Axios } = require('axios');
const passport = require('passport');
const passportSetup = require('../config/passport-setup');

module.exports = (app) => {
    app.get('/auth/trakt', passport.authenticate('trakt'));
    app.get('/auth/trakt/callback', passport.authenticate('trakt', { failureRedirect: "/" }), (req, res) => {
        res.redirect('/');
    });
    app.get('/auth/user', (req, res) => {
        if (req.user) {
            if (req.user.tokenExpirationDate < new Date()) {
              //refresh the expired access token for the user
              console.log("Kek");
              Axios({
                  headers:{
                      "Content-Type": "application/json"
                  },
                  method:'POST',
                  url:"https://api.trakt.tv/oauth/token",
                  data:{
                      "refresh_token": req.user.refreshToken,
                      "client_id": process.env.CLIENT_ID,
                      "client_secred": process.env.CLIENT_SECRET,
                      "redirect_uri": process.env.DOMAIN+"/auth/trakt/callback",
                      "grant_type": "refresh_token"
                  }
              }).then((resp)=>{
                  res.status(200).send({user: req.user.username, msg:"Token Refreshed"});
              }).catch((err)=>{
                  console.log(err);
              })
            }
            res.status(200).send({ user: req.user.username });
        } else {
            res.status(200).send({ "error": "Not Logged in" });
        }
    })


}