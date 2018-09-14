const PhotosCtrl = require('../controllers/photosController');
const express = require('express');

const router = express.Router();


// Handle incoming requests to "/photos/"
router.get('/', PhotosCtrl.allPublicPhotos);

// Handle incoming requests to "/photos/t" with "tags" query string
router.get('/t', PhotosCtrl.findPhoto );

module.exports = router;