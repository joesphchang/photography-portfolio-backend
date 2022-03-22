const mongoose = require('../db/connection');

const PortfolioSchema = new mongoose.Schema({
	title: String,
	image: String,
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
