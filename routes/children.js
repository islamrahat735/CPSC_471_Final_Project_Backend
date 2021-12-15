const Joi = require('joi')
const express = require('express');
const router = express.Router()
const ChildController = require('../controllers/childController')

router.get('/', ChildController.findall);

router.get('/:chId',  ChildController.findChild);

router.post('/',  ChildController.addChild);

router.put('/',  ChildController.updateChild);

router.delete('/:chId',  ChildController.deleteChild)

router.get('/parent/:pid', ChildController.findChildrenOfParent)

router.get('/username/:username', ChildController.findChildrenOfParentByUsername)

module.exports = router;