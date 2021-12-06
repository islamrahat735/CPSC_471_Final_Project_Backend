const Joi = require('joi')
const express = require('express');
const router = express.Router()
const HealthConditionController = require('../../controllers/MedicalRecordControllers/healthConditionController')

router.post('/', HealthConditionController.addConditionById);

router.get('/:mrid', HealthConditionController.findAllById);

router.get('/:mrid/:condition', HealthConditionController.findOneById);

router.delete('/:mrid/:condition', HealthConditionController.deleteConditionById);

//router.put('/', HealthConditionController.updateConditionById);

module.exports = router;