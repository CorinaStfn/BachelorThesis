const express = require('express')
const router = express.Router()
const signUpSchemaCopy = require('../models/signUpModels')
const { body, validationResult } = require('express-validator');

router.post('/signup', (req, res, next) => {

    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if(errors) {
            console.log('errors: ${JSON.stringify(errors)}');
            alert('scrie fa un nume');
        }
    };

    const signUpUser = new signUpSchemaCopy({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})


module.exports = router;