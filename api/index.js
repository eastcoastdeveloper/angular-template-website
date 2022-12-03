const express = require('express');
const app = express();
const fs = require('fs');

app.get('/app', (req, res) => {
  let rawData = fs.readFileSync('projectList.json');
  let data = JSON.parse(rawData);
  res.send(data);
})

app.listen(8080, () => {
  console.log('listening on port 8080');
})