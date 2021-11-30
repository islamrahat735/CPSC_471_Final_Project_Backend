const Joi = require('joi')
const express = require('express');
const router = express.Router()
const AccountController = require('../controllers/accountController')

router.post('/', AccountController.addAccount);

router.get('/', AccountController.findAll);

router.get('/:username', AccountController.findOne)

router.delete('/:username', AccountController.delete)

module.exports = router;


