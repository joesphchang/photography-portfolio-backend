const Portfolio = require('../models/Portfolio');
const portfolioSeeds = require('./list.json');

// Logic
Portfolio.deleteMany({})
	.then(() => {
		console.log('Deleted all of my portfolio!');
		return portfolioSeeds.map((portfolio) => {
			return { ...portfolio };
		});
	})
	.then((portfolio) => {
		return Portfolio.insertMany(portfolio);
	})
	.then((newPortfolio) => {
		console.log('Created a new portfolio!', newPortfolio);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
