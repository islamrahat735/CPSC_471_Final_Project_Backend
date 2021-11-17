const Joi = require('joi')
const express = require('express');
const router = express.Router()


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'}
];
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/api/courses', (req, res) => {
    res.send(courses);
})

router.get('/api/courses/:id', (req,res) => {
   const course = courses.find(c=> c.id ===parseInt(req.params.id));
   if(!course) {
       return res.status(404).send('course not found')
   }
   res.send(course);
});

router.post('/api/courses/', (req,res) => {

    const result = validateCourse(result);

    if (result.error){
        return res.status(400).send(result.error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/api/courses/:id', (req,res) => {
    const course = courses.find(c=> c.id ===parseInt(req.params.id));
    if(!course) {
        return res.status(404).send('course not found');
    }
    const {error} = validateCourse(req.body);
    if (error){
        return res.status(400).send(error.details[0].message);
    }

    course.name = req.body.name;
    res.send(course);
});

router.delete('/api/courses/:id', (req,res) =>{
    const course = courses.find(c=> c.id ===parseInt(req.params.id));
    if(!course) {
        return res.status(404).send('course not found');
    }
    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
})

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

module.exports = router