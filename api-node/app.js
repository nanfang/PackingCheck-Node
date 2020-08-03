const express = require('express');

const packsRoutes = require('./routes/packs');

const app = express();

app.use('/v1', packsRoutes);

app.listen(8080);

