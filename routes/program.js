const Joi = require('joi')
const express = require('express');
const router = express.Router()
const ProgramController = require('../controllers/programController')

router.get('/', ProgramController.findAll);

router.get('/:progName', ProgramController.findProgram);

router.post('/', ProgramController.addProgram);

router.put('/', ProgramController.updateProgram);

router.delete('/:progName', ProgramController.deleteProgram)

module.exports = router;