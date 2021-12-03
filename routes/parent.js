const Joi = require('joi')
const express = require('express');
const router = express.Router()
const ParentController = require('../controllers/parentController')

router.get('/all/', ParentController.findall);

router.get('/one/:pid', ParentController.findOne);

router.post('/', ParentController.addParent);

router.put('/', ParentController.updateParent);

router.delete('/:pid', ParentController.delete)

module.exports = router;