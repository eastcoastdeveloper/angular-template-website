const express = require('express');
const router = express.Router();
const projectData = require('../json/accordion.json');

function accordionComponent(model) {
  return (req, res, next) => {
    results = model.accordionData;
    res.accordionComponent = results;
    next();
  }
}

router.get('/', accordionComponent(projectData), (req, res) => {
  res.json(res.accordionComponent);
})

module.exports = router;