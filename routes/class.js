const express = require('express');
const router = express.Router()
const ClassController = require('../controllers/classController')

router.post('/', ClassController.addClass);

router.get('/', ClassController.findAll);

router.get('/:cid', ClassController.findOne);

router.get('/teacher/:tid', ClassController.findAllByTeacher)

router.delete('/:cid', ClassController.delete);

router.put('/', ClassController.updateClass)

module.exports = router;
