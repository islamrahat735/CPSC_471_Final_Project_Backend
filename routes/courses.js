//const Joi = require('joi')
const express = require('express');
const router = express.Router()

//const courses = require('../repos/courseRepo')

const courseController = require('../controllers/courseController')

// const courses = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'},
//     {id: 3, name: 'course3'},
//     {id: 4, name: 'course4'}
// ];


router.get('/', courseController.getAllCourses)

router.get('/:id', courseController.getCourseById);

router.post('/', courseController.createCourse);

router.put('/:id', courseController.updateCurrentCourse);

router.delete('/:id', courseController.deleteCurrentCourse)


module.exports = router