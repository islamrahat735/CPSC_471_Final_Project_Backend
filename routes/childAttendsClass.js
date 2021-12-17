const express = require('express');
const router = express.Router()

const childAttendsClassController = require("../controllers/childAttendsClassController")

router.get('/', childAttendsClassController.findAll)

router.get('/:chId', childAttendsClassController.findOne)

router.post('/', childAttendsClassController.add)

module.exports = router;