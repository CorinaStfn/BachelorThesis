const express = require('express')
const router = express.Router()
const sleepSchemaCopy = require('../models/sleepModels')

router.post('/sleep', (req, res, next) => {

    const placeToSleep = new sleepSchemaCopy({
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        phoneNumber: req.body.phoneNumber,
        "coordinates.lat": req.body.coordinates.lat,
        "coordinates.lng": req.body.coordinates.lng,
        mainImage: req.body.mainImage,
        allImages: req.body.allImages,
        rating: {
            score: req.body.score,
            description: req.body.description
        }
    })

    placeToSleep.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.get('/sleep', async (req, res, next) => {
    const places = await sleepSchemaCopy.find();
    res.json(places);
})


module.exports = router;