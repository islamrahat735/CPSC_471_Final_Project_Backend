const Joi = require('joi')
const express = require('express');
const router = express.Router()
const teacherController = require('../controllers/teacherController')

router.get('/', teacherController.findAll);

router.get('/:eid', teacherController.findOne);

router.post('/', teacherController.addteacher);

router.delete('/:eid', teacherController.delete)

module.exports = router;