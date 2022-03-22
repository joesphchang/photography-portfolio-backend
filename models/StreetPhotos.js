const mongoose = require('../db/connection');

const StreetPhotosSchema = new mongoose.Schema({
	title: String,
	street_photos: String,
});

const StreetPhotos = mongoose.model('StreetPhotos', StreetPhotosSchema);

module.exports = StreetPhotos;
