const express = require('express');
const router = express.Router();
const projectData = require('../json/projects.json');

function paginatedResults(model) {
    return (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const results = {};
  
      results.results = model.data.slice(startIndex, endIndex);
      res.paginatedResults = results;
      next();
    }
  }

router.get('/', paginatedResults(projectData), (req, res) => {
    res.json(res.paginatedResults);
})

module.exports = router;