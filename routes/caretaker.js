const Joi = require('joi')
const express = require('express');
const router = express.Router()
const caretakerController = require('../controllers/caretakerController')

router.post('/', caretakerController.addcaretaker);

router.get('/', caretakerController.findAll);

 router.get('/:E_Id', caretakerController.findOne);

router.delete('/:E_Id', caretakerController.delete);

router.put('/', caretakerController.updatecaretaker);

module.exports = router;