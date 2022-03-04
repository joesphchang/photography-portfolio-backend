const express = require('express');

const router = express.Router();

const Portfolio = require('../models/Portfolio');

// Getting all portfolio
router.get('/', async (req, res, next) => {
	try {
		const portfolios = await Portfolio.find({});
		res.json(portfolios);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const portfolio = await Portfolio.findById(req.params.id);
		res.json(portfolio);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newPortfolio = await Portfolio.create(req.body);
		res.json(newPortfolio);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
