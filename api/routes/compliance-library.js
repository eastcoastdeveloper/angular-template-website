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

  const allCount = projectData.data.length;
  const projectCount = projectData.data.filter((item) => item.category === "leadership").length;
  const cmptCount = projectData.data.filter((item) => item.category === "standards").length;
  const devCount = projectData.data.filter((item) => item.category === "security").length;

  if (type === "all") {
    filteredItems = projectData.data;
  } else {
    filteredItems = projectData.data.filter((item) => {
      return item.category === type;
    });
  }

  results[type] = filteredItems.slice(startIndex, endIndex);

  results.totals = {
    all: allCount,
    leadership: projectCount,
    standards: cmptCount,
    security: devCount,
  };
  res.json(results);
});

module.exports = router;
