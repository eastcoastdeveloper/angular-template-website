const express = require('express');
const router = express.Router();
const projectData = require('../json/table-paginated.json');

function tablePaginatedCmpt(model) {
  return (req, res, next) => {
    results = model.tablePaginated;
    res.tablePaginatedCmpt = results;
    next();
  }
}

router.get('/', tablePaginatedCmpt(projectData), (req, res) => {
  res.json(res.tablePaginatedCmpt);
})

module.exports = router;