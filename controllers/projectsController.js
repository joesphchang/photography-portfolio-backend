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

router.get('/:id'), async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project);
    } catch (error) {
        next(error);
    }
}

module.exports = router;
