const express = require('express');
const app = express();
const fs = require('fs');

app.get('/app/', (req, res) => {
    const jsonData = fs.readFileSync("./projectList.json");
    res.send(jsonData);
})