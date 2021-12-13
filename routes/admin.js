const Joi = require('joi')
const express = require('express');
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/', adminController.findAll);

router.get('/:eid', adminController.findOne);

router.post('/', adminController.addadmin);

router.delete('/:eid', adminController.delete)

module.exports = router;