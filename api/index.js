const port = process.env.PORT || 8080;

const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());

app.use('/api/javascript-projects', require('./routes/javascript-projects'));

app.listen(port, (err) => {
    if (err) { console.log(err); }
    else { console.log(`listening on port ${port}`); }
})

module.exports = app;
