const express = require('express');
const router = express.Router();
const projectData = require('../json/table-paginated.json');

function tablePaginatedComponent(model) {
    return (req, res, next) => {
        results = model.tablePaginated;
        res.tablePaginatedComponent = results;
        next();
    }
}

router.get('/', tablePaginatedComponent(projectData), (req, res) => {
    res.json(res.tablePaginatedComponent);
})

module.exports = router;