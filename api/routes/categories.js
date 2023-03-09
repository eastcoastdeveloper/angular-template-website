// const express = require('express');
// const router = express.Router();
// const projectData = require('../json/projects.json');

// function categoryResults(model) {
//     return (req, res, next) => {
//       const type = req.query.type;
//       const results = {};
//       results.results = model.data.filter((item) => item.category === type);
//       results.totalItems = model.data.length;
//       res.categoryResults = results;
//       next();
//     }
//   }

// router.get('/', categoryResults(projectData), (req, res) => {
//   res.json(res.categoryResults);
// })

// module.exports = router;