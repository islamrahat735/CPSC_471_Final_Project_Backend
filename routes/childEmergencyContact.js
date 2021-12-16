const Joi = require('joi')
const express = require('express');
const router = express.Router()
const childEmergencyContactController = require('../controllers/childEmergencyContactController')

 router.post('/', childEmergencyContactController.addChildEmergencyContact);

router.get('/', childEmergencyContactController.findAll);

 router.get('/:Pno/:chId', childEmergencyContactController.findOne);

router.delete('/:Pno/:chId', childEmergencyContactController.delete);

router.get('/:chId', childEmergencyContactController.addChildEmergencyContact);

module.exports = router;