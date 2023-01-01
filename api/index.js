const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// JavaScript Projects
app.use('/api/javascript-projects', require('./routes/pagination'))

// Categories
app.use('/api/category', require('./routes/categories'))

// Accordion
app.use('/api/accordion', require('./routes/accordion'))

// Dynamic Sidebar
app.use('/api/dynamic-sidebar', require('./routes/dynamic-sidebar'))

// Table Paginated
app.use('/api/table-paginated', require('./routes/table-paginated'))

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})