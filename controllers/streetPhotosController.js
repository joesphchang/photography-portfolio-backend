const express = require('express');

const router = express.Router();

const StreetPhoto = require('../models/StreetPhotos');

router.get('/', async (req, res, next) => {
    try {
        const streetphotos = await StreetPhoto.find({});
        res.json(streetphotos)
    } catch (error) {
        next(error);
    }
});


module.exports = router;