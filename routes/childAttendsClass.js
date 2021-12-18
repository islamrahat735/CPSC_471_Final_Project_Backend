const express = require('express');
const router = express.Router()

const childAttendsClassController = require("../controllers/childAttendsClassController")

router.get('/', childAttendsClassController.findAll)

router.get('/contactTrace/:chId/:cId/:date', childAttendsClassController.contactTrace)

router.get('/:chId', childAttendsClassController.findOne)

router.post('/', childAttendsClassController.add)

router.delete('/:chId/:cId/:date', childAttendsClassController.delete)


module.exports = router;