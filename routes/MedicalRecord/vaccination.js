const Joi = require('joi')
const express = require('express');
const router = express.Router()
const VaccinationController = require('../../controllers/MedicalRecordControllers/vaccinationController')

router.post('/', VaccinationController.addVaccineById);

router.get('/:mrid', VaccinationController.findAllById);

router.get('/:mrid/:vaccine', VaccinationController.findOneById);

router.delete('/:mrid/:vaccine', VaccinationController.deleteVaccineById);

//router.put('/', VaccinationController.updateVaccineById);

module.exports = router;