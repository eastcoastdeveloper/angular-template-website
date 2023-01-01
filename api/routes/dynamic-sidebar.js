const express = require('express');
const router = express.Router();
const projectData = require('../json/dynamic-sidebar.json');

function dynamicSidebar(model) {
  return (req, res, next) => {
    results = model.sidebarData;
    res.dynamicSidebar = results;
    next();
  }
}

router.get('/', dynamicSidebar(projectData), (req, res) => {
  res.json(res.dynamicSidebar);
})

module.exports = router;