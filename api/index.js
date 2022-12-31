const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// JavaScript Projects
app.use('/api/javascript-projects', require('./routes/pagination'))

// Categories
app.use('/api/category', require('./routes/categories'))

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})