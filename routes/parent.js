const Joi = require('joi')
const express = require('express');
const router = express.Router()
const ParentController = require('../controllers/parentController')

router.get('/', ParentController.findall);

router.get('/:pid', ParentController.findOne);

router.post('/', ParentController.addParent);

router.put('/', ParentController.updateParent);

router.delete('/:pid', ParentController.delete)

module.exports = router;