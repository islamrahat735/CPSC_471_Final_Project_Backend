const Joi = require('joi')
const express = require('express');
const router = express.Router()
const MedicalRecordController = require('../../controllers/MedicalRecordControllers/medicalRecordController')

router.post('/', MedicalRecordController.addRecord);

router.get('/', MedicalRecordController.findAll);

router.get('/:mrid', MedicalRecordController.findOneById);

router.delete('/:mrid', MedicalRecordController.deleteRecord);

router.put('/', MedicalRecordController.updateRecord);

module.exports = router;