const mongoose = require('../db/connection');

const PortfolioSchema = new mongoose.Schema({
	title: String,
	image: String,
    street_photos: String,
    projects: {
        title: String,
        description: String,
        photo: String,
        photo_1: String,
        photo_2: String,
        photo_3: String,
        photo_4: String,
        photo_5: String,
        photo_6: String,
    },
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
