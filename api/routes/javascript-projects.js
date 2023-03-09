const express = require('express');
const router = express.Router();
const projectData = require('../json/projects.json');

function paginatedResults(model) {
    return (req, res, next) => {
      const results = {};
      let filteredItems = [];
      
      const type = req.query.type;
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      
      const allCount = model.data.length;
      const projectCount = model.data.filter((item) => item.category === 'projects').length;
      const cmptCount = model.data.filter((item) => item.category === 'components').length;
      const devCount = model.data.filter((item) => item.category === 'development').length;
      
      if (type === 'all') filteredItems = model.data;
      if (type === 'projects') filteredItems = model.data.filter((item) => { return item.category === 'projects' });
      if (type === 'cmp') filteredItems = model.data.filter((item) => { return item.category === 'components' });
      if (type === 'dev') filteredItems = model.data.filter((item) => { return item.category === 'development' });
      
      results[type] = filteredItems.slice(startIndex, endIndex);

      results.totals = {
        all: allCount,
        prj: projectCount,
        cmp: cmptCount,
        dev: devCount
      }
      res.paginatedResults = results;
      next();
    }
  }

router.get('/', paginatedResults(projectData), (req, res) => {
    res.json(res.paginatedResults);
})

module.exports = router;