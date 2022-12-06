const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 8080;

app.get('/app', (req, res) => {
  let rawData = fs.readFileSync('projectList.json');
  let data = JSON.parse(rawData);
  res.send(data);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})