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

  // REQUESTED PAGE FROM UI PAGINATION
  results[type] = filtered.slice(startIndex, endIndex);

  results.totals = {
    all: resource.data.length,
    leadership: categoryAmnt("leadership"),
    standards: categoryAmnt("standards"),
    security: categoryAmnt("security"),
  };

  res.json(results);
});

// CATEGORY TOTAL
const categoryAmnt = (cat) => {
  const count = resource.data.filter((item) => {
    return item.category === cat;
  });
  return count.length;
};

module.exports = router;
