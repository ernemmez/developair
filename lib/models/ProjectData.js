const mongoose = require('mongoose');
const ProjectDataSchema = require('../schemas/ProjectDataSchema');

const ProjectData = mongoose.model('ProjectData', ProjectDataSchema);

module.exports = ProjectData;