const express = require('express');
const app = express();
const logger = require('morgan');
const photosRoutes = require ('./server/routes/photosRoutes');
const healthCheckRoutes = require ('./server/routes/healthcheckRoute');
const cors = require('cors');

app.use(logger('dev'));
app.use(cors());
app.use('/api/photos', photosRoutes);
app.use('/api/healthcheck', healthCheckRoutes);

app.use((req, res, next) => {
    const error = new Error('bad request');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ 
        error: { message: error.message  }
    });
});

module.exports = app;