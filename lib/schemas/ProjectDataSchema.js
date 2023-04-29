const mongoose = require('mongoose');

const ProjectDataSchema = new mongoose.Schema({
    fileName: String,
    filePath: String,
    fileContent: String,
});

module.exports = ProjectDataSchema