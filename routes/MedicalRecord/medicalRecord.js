const Joi = require('joi')
const express = require('express');
const router = express.Router()
const MedicalRecordController = require('../../controllers/MedicalRecordControllers/medicalRecordController')

router.post('/', MedicalRecordController.addRecord);

router.get('/:mrid', MedicalRecordController.findAll);

router.get('/:mrid/:covidStatus', MedicalRecordController.findOneById);

router.delete('/:mrid/:covidStatus', MedicalRecordController.deleteRecord);

router.put('/', MedicalRecordController.updateRecord);

module.exports = router;