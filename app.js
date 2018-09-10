const express = require('express');
const app = express();
const logger = require('morgan');
const photosRoutes = require ('./server/routes/photosRoutes');

app.use(logger('dev'));
//app.use(express.json());
app.options('/*', (req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
     res.sendStatus(200);
});
app.use('/api/photos', photosRoutes);

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