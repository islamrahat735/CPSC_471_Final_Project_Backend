const Joi = require('joi')
const express = require('express');
const router = express.Router()
const childEmergencyContactController = require('../controllers/childEmergencyContactController')

router.post('/', childEmergencyContactController.addChildEmergencyContact);

router.get('/', childEmergencyContactController.findAll);

 router.get('/specific/:Pno/:chId', childEmergencyContactController.findOne);

router.delete('/specific/:Pno/:chId', childEmergencyContactController.delete);

router.get('/child/:chId', childEmergencyContactController.getChildEmergencyContacts);

module.exports = router;