const Projects = require('../models/Projects');
const projectSeeds = require('./projectList.json');

// Logic
Projects.deleteMany({})
	.then(() => {
		console.log('Deleted all of my projects');
		return projectSeeds.map((project) => {
			return { ...project };
		});
	})
	.then((project) => {
		return Projects.insertMany(project);
	})
	.then((newProject) => {
		console.log('Created a new project!', newProject);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
