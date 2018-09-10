const PhotosCtrl = require('../controllers/photosController');
const express = require('express');

const router = express.Router();


// Handle incoming requests to "/photos"
router.get('/', PhotosCtrl.allPublicPhotos);


module.exports = router;