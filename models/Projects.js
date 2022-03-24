const mongoose = require('../db/connection');

const ProjectsSchema = new mongoose.Schema({
	title: String,
	description: String,
	photo: String,
	project_folder: {
		photo_1: String,
		photo_2: String,
		photo_3: String,
		photo_4: String,
		photo_5: String,
		photo_6: String,
		instagram: String,
		website: String,
	},
});

const Projects = mongoose.model('Projects', ProjectsSchema);

module.exports = Projects;
