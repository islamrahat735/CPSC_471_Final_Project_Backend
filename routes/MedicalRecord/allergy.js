const Joi = require('joi')
const express = require('express');
const router = express.Router()
const AllergyController = require('../../controllers/MedicalRecordControllers/allergyController')

router.post('/', AllergyController.addAllergyById);

router.get('/:mrid', AllergyController.findAllById);

router.get('/:mrid/:allergy', AllergyController.findOneById);

router.delete('/:mrid/:allergy', AllergyController.deleteAllergyById);

//router.put('/', AllergyController.updateAllergyById);

module.exports = router;