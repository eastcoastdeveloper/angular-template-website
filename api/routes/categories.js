const express = require('express');
const router = express.Router();
const projectData = require('../project-list.json');

function categoryResults(model) {
  return (req, res, next) => {
    const type = req.query.type;
    const results = {};
    results.results = model.data.filter((item) => item.category === type);
    res.categoryResults = results;
    next();
  }
}

router.get('/', categoryResults(projectData), (req, res) => {
  res.json(res.categoryResults);
})

module.exports = router;