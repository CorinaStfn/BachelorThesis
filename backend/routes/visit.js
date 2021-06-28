const express = require('express')
const router = express.Router()
const visitSchemaCopy = require('../models/visitModels')

router.post('/visit', (req, res, next) => {

    const placeToVisit = new visitSchemaCopy({
        title: req.body.title,
        mainDescription: req.body.mainDescription,
        mainImage: req.body.mainImage,
        rating: {
            score: req.body.score,
            description: req.body.description
        }
    })

    placeToVisit.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.get('/visit', async (req, res, next) => {
    const places = await visitSchemaCopy.find();
    res.json(places);
})


module.exports = router;