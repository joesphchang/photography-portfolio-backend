const mongoose = require('../db/connection');

const PortfolioSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String,
	created: String,
	deployed: String,
	deployed_site: String,
	github: String,
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
