const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    stackblitz: {
        type: Boolean,
        required: true
    },
    internal: {
        type: Boolean,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    forks: {
        type: Number,
        required: true
    },
    publishedOn: {
        type: Boolean,
        required: true
    },
    updatedOn: {
        type: String,
        required: true
    },
    repoLink: {
        type: String,
        required: true
    },
    repoTitle: {
        type: String,
        required: true
    },
    showInPage: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Projects', projectSchema);