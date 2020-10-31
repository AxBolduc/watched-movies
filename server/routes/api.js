const { default: Axios } = require('axios');
const User = require('../models/user-model');

module.exports = (app) => {
    app.get('/api/watched', (req, res) => {
        if (req.user) {
            User.findById(req.user.id, (err, dRes) => {
                let authToken = dRes.token;

                Axios({
                    headers: {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${authToken}`,
                        "trakt-api-version": 2,
                        "trakt-api-key": process.env.CLIENT_ID
                    },
                    method: "GET",
                    url: "https://api.trakt.tv/sync/watched/movies"
                }).then((resp) => {
                    res.status(200).send(resp.data);
                }).catch((err) => {
                    res.send(err);
                });

            });
        } else {
            res.status(400).send({ "error": "Not Logged in" });
        }
    })

    app.get("/api/trending", (req, res) => {
        Axios({
            headers: {
                "content-type": "application/json",
                "trakt-api-version": 2,
                "trakt-api-key": process.env.CLIENT_ID
            },
            method: "GET",
            url: "https://api.trakt.tv/movies/trending?limit=50"
        }).then((data)=>{
            res.status(200).send(data.data);
        }).catch((err)=>{
            res.status(400).send(err);
        });
    })
    
    app.get("/api/popular", (req, res) => {
        Axios({
            headers: {
                "content-type": "application/json",
                "trakt-api-version": 2,
                "trakt-api-key": process.env.CLIENT_ID
            },
            method: "GET",
            url: "https://api.trakt.tv/movies/popular?limit=50"
        }).then((data)=>{
            res.status(200).send(data.data);
        }).catch((err)=>{
            res.status(400).send(err);
        })

    })




}