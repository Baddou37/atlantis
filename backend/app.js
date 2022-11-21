// import of express
const express = require('express');

// call of express
const app = express();

//Intercept all request who have a json contentType to be able to use tu body.req
app.use(express.json());

// import of cors
const cors = require('cors');

// load env variables
const dotenv = require("dotenv").config();

// DB piquante URI
const dbURI = process.env.MONGODB_URI;

// import of mongoose
const mongoose = require('mongoose');

// Connection to DB
mongoose.connect(dbURI, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log("Yeah, Connexion à MongoDB Atlas réussie ! Rien ne sert de courir, il faut partir à point, surtout quand on est un atlante !"))
    .catch(() => console.log("Woops, Connexion à MongoDB échouée !"));

// set of headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// import of atlante route
const atlanteRoute = require('./routes/atlanteRoute');

// use of atlante route
app.use('/api/atlantes', atlanteRoute);

// export of app
module.exports = app;