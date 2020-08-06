const express = require('express');
const bodyParser = require('body-parser');
const packsRoutes = require('./routes/packs');

const app = express();

app.use(bodyParser.json());

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/v1', packsRoutes);

app.listen(8080);

