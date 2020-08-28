const express = require('express');
const bodyParser = require('body-parser');
const packsRoutes = require('./routes/packs');
const checkJwt = require('./utils/auth0');
const app = express();
const port = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(checkJwt);
app.use('/v1', packsRoutes);

app.listen(port);

