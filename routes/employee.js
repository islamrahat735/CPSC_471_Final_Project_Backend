const Joi = require('joi')
const express = require('express');
const router = express.Router()
const employeeController = require('../controllers/employeeController')

router.get('/all/', employeeController.findAll);

router.get('/:eid', employeeController.findOne);

router.post('/', employeeController.addemployee);

//router.put('/', employeeController.updateemployee);

router.delete('/:eid', employeeController.delete)

module.exports = router;