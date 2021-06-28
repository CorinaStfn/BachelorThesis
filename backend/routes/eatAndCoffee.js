const express = require('express')
const router = express.Router()
const eatAndCoffeeSchemaCopy = require('../models/eatAndCoffeeModels')

router.post('/eatandcoffee', (req, res, next) => {

    const placeToEat = new eatAndCoffeeSchemaCopy({
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

    placeToEat.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.get('/eatandcoffee', async (req, res, next) => {
    const places = await eatAndCoffeeSchemaCopy.find();
    res.json(places);
})


module.exports = router;