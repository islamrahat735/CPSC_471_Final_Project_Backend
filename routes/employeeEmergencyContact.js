const Joi = require('joi')
const express = require('express');
const router = express.Router()
const employeeEmergencyContactController = require('../controllers/employeeEmergencyContactController')

 router.post('/', employeeEmergencyContactController.addEmployeeEmergencyContact);

router.get('/', employeeEmergencyContactController.findAll);

 router.get('/specific/:Pno/:eid', employeeEmergencyContactController.findOne);

router.delete('/specific/:Pno/:eid', employeeEmergencyContactController.delete);

router.get('/employee/:eId', employeeEmergencyContactController.getEmployeeEmergencyContacts);


module.exports = router;