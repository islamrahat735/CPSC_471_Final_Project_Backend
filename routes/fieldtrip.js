const express = require('express');
const router = express.Router()
const fieldtripController = require('../controllers/fieldtripController')

router.post('/', fieldtripController.addfieldtrip);

router.get('/', fieldtripController.findAll);

router.get('/:tripid', fieldtripController.findOne);

router.delete('/:tripid', fieldtripController.delete);

router.put('/', fieldtripController.updatefieldtrip)

module.exports = router;
