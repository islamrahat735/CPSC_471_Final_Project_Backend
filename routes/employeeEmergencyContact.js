const Joi = require('joi')
const express = require('express');
const router = express.Router()
const employeeEmergencyContactController = require('../controllers/employeeEmergencyContactController')

 router.post('/', childEmergencyContactController.addEmployeeEmergencyContact);

router.get('/', childEmergencyContactController.findAll);

 router.get('/:Pno/:eid', childEmergencyContactController.findOne);

router.delete('/:Pno/:eid', childEmergencyContactController.delete);

module.exports = router;