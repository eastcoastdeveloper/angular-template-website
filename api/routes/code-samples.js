const express = require('express');
const router = express.Router();
const projectData = require('../json/code-samples.json');

function codeSamplesAccordion(model) {
  return (req, res, next) => {
    results = model.codeSamples;
    res.codeSamplesAccordion = results;
    next();
  }
}

router.get('/', codeSamplesAccordion(projectData), (req, res) => {
  res.json(res.codeSamplesAccordion);
})

module.exports = router;