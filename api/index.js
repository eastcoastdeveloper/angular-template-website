const express = require('express');
const app = express();
const fs = require('fs');
const projectData = require('./projectList.json');
const port = process.env.PORT || 8080;

function paginatedResults(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }

    results.results = model.slice(startIndex, endIndex);
    res.paginatedResults = results;
    next();
  }
}

app.get('/app', paginatedResults(projectData), (req, res) => {
  console.log(res.paginatedResults)
  res.json(res.paginatedResults);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})