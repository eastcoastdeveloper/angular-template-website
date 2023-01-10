const express = require('express');
const router = express.Router();
const projectData = require('../json/dynamic-sidebar.json');

function dynamicSidebarComponent(model) {
    return (req, res, next) => {
        results = model.sidebarData;
        res.dynamicSidebarComponent = results;
        next();
    }
}

router.get('/', dynamicSidebarComponent(projectData), (req, res) => {
    res.json(res.dynamicSidebarComponent);
})

module.exports = router;