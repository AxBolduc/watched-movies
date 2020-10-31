const express=require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const passport = require('passport')
const cookieSession = require('cookie-session');

require('dotenv').config()

const app = express();
app.use(cors());

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.COOKIE_KEY]
}))

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to db
mongoose.connect(process.env.DB_STRING, ()=>{
    console.log("Connected to db");
})

//load external routes
require('./routes/api')(app);
require('./routes/auth')(app);

app.listen("4000", () =>{
    console.log("listening on port 4000");
})

