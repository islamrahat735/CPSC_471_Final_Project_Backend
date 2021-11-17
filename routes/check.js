const Joi = require('joi')
const express = require('express');
const router = express.Router()

const courses = require('../repos/courseRepo')

router.get('/', (req, res) => {
    res.send(courses);
})

module.exports = router;