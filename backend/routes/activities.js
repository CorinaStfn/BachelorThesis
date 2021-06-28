const express = require('express')
const router = express.Router()
const activitiesSchemaCopy = require('../models/activitiesModels')

router.post('/activities', (req, res, next) => {

    const activity = new activitiesSchemaCopy({
        title: req.body.title,
        mainDescription: req.body.mainDescription,
        mainImage: req.body.mainImage,
        rating: {
            score: req.body.score,
            description: req.body.description
        }
    })

    activity.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.get('/activities', async (req, res, next) => {
    const places = await activitiesSchemaCopy.find();
    res.json(places);
})


module.exports = router;