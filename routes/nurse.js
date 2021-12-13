const Joi = require('joi')
const express = require('express');
const router = express.Router()
const nurseController = require('../controllers/nurseController')

router.post('/', nurseController.addnurse);

router.get('/', nurseController.findAll);

 router.get('/:E_Id', nurseController.findOne);

router.delete('/:E_Id', nurseController.delete);

router.put('/', nurseController.updatenurse);

module.exports = router;