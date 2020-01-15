const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.Model('Dev', DevSchema);