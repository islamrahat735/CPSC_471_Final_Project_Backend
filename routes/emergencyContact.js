const Joi = require('joi')
const express = require('express');
const router = express.Router()
const EmergencyContactController = require('../controllers/emergencyContactController')

 router.post('/', EmergencyContactController.addEmergencyContact);

router.get('/', EmergencyContactController.findAll);

 router.get('/:Pno', EmergencyContactController.findOne);

// router.delete('/:username', AccountController.delete)

module.exports = router;