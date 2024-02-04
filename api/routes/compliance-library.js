const express = require("express");
const router = express.Router();
const projectData = require("../json/projects.json");

router.get("/", (req, res) => {
  const results = {};
  let filteredItems = [];

  const type = req.query.type;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  if (type === "all") {
    filteredItems = projectData.data;
  } else {
    filteredItems = projectData.data.filter((item) => {
      return item.category === type;
    });
  }

  results[type] = filteredItems.slice(startIndex, endIndex);

  results.totals = {
    all: projectData.data.length,
    leadership: projectData.data.filter((item) => item.category === "leadership").length,
    standards: projectData.data.filter((item) => item.category === "standards").length,
    security: projectData.data.filter((item) => item.category === "security").length,
  };
  res.json(results);
});

module.exports = router;
