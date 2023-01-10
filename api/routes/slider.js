const express = require('express');
const router = express.Router();
const projectData = require('../json/slider.json');

function sliderComponent(model) {
    return (req, res, next) => {
        results = model.sliderData;
        res.sliderComponent = results;
        next();
    }
}

router.get('/', sliderComponent(projectData), (req, res) => {
    res.json(res.sliderComponent);
})

module.exports = router;