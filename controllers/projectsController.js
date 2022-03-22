const express = require('express');

const router = express.Router();

const Project = require('../models/Projects');

router.get('/', async (req, res, next) => {
	try {
		const projects = await Project.find({});
		res.json(projects);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
