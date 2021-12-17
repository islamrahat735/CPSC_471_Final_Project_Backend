const express = require('express');
const router = express.Router()

const teacherAttendsClassController = require("../controllers/teacherAttendsClassController")

router.get('/', teacherAttendsClassController.findAll)

router.get('/:tId', teacherAttendsClassController.findOne)

router.post('/', teacherAttendsClassController.add)

module.exports = router;