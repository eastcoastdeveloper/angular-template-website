const express = require("express");
const router = express.Router();
const projectData = require("../json/projects.json");

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
    const projectCount = model.data.filter((item) => item.category === "leadership").length;
    const cmptCount = model.data.filter((item) => item.category === "standards").length;
    const devCount = model.data.filter((item) => item.category === "security").length;

    if (type === "all") filteredItems = model.data;
    if (type === "leadership")
      filteredItems = model.data.filter((item) => {
        return item.category === "leadership";
      });
    if (type === "standards")
      filteredItems = model.data.filter((item) => {
        return item.category === "standards";
      });
    if (type === "security")
      filteredItems = model.data.filter((item) => {
        return item.category === "security";
      });

    results[type] = filteredItems.slice(startIndex, endIndex);

    results.totals = {
      all: allCount,
      leadership: projectCount,
      standards: cmptCount,
      security: devCount,
    };
    res.paginatedResults = results;
    next();
  };
}

router.get("/", paginatedResults(projectData), (req, res) => {
  res.json(res.paginatedResults);
});

module.exports = router;
