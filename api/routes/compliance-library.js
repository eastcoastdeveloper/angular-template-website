const express = require("express");
const router = express.Router();
const resource = require("../json/projects.json");

router.get("/", (req, res) => {
  const results = {};
  let filtered = [];

  const type = req.query.type;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  type === "all"
    ? (filtered = resource.data)
    : (filtered = resource.data.filter((item) => {
        return item.category === type;
      }));

  results[type] = filtered.slice(startIndex, endIndex);

  results.totals = {
    all: resource.data.length,
    leadership: resource.data.filter((item) => item.category === "leadership").length,
    standards: resource.data.filter((item) => item.category === "standards").length,
    security: resource.data.filter((item) => item.category === "security").length,
  };
  res.json(results);
});

module.exports = router;
