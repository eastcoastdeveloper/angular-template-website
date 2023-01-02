const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use('/api/javascript-projects', require('./routes/pagination'));
app.use('/api/category', require('./routes/categories'));
app.use('/api/accordion', require('./routes/accordion'));
app.use('/api/dynamic-sidebar', require('./routes/dynamic-sidebar'));
app.use('/api/table-paginated', require('./routes/table-paginated'));
app.use('/api/code-samples', require('./routes/code-samples'));
app.use('/api/slider', require('./routes/slider'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})