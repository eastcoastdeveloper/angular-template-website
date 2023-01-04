const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const projectData = require('./projects.json');

// GET All Projects
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

// GET Categories
function categoryResults(model) {
  return (req, res, next) => {
    const type = req.query.type;
    const results = {};
    results.results = model.data.filter((item) => item.category === type);
    res.categoryResults = results;
    next();
  }
}

app.use('/api/javascript-projects', paginatedResults(projectData), (req, res) => {
  res.json(res.paginatedResults);
})

app.get('/api/category', categoryResults(projectData), (req, res) => {
  res.json(res.categoryResults);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
