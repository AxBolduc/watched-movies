const passport = require('passport');
const passportSetup = require('../config/passport-setup');

module.exports = (app) => {
    app.get('/auth/trakt', passport.authenticate('trakt'));
    app.get('/auth/trakt/callback', passport.authenticate('trakt', { failureRedirect: "/" }), (req, res) => {
        res.redirect('/');
    });
    app.get('/auth/user', (req, res) => {
        if (req.user) {
            res.status(200).send({ "user": req.user.username });
        } else {
            res.status(200).send({ "error": "Not Logged in" });
        }
    })


}