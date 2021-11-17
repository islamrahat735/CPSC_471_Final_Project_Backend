const Joi = require('joi')
const courses = require('../repos/courseRepo');

class CourseController {
    
    getAllCourses = (req, res) => {
        res.send(courses);
    };

    getCourseById = (req,res) => {
        const course = courses.find(c=> c.id ===parseInt(req.params.id));
        if(!course) {
            return res.status(404).send('course not found')
        }
        res.send(course);
    };

    createCourse = (req,res) => {

        const result = this.validateCourse(req.body);
    
        if (result.error){
            return res.status(400).send(result.error.details[0].message);
        }
        const course = {
            id: courses.length + 1,
            name: req.body.name
        };
        courses.push(course);
        res.send(course);
    };

    updateCurrentCourse = (req,res) => {
        const course = courses.find(c=> c.id ===parseInt(req.params.id));
        if(!course) {
            return res.status(404).send('course not found');
        }
        const {error} = this.validateCourse(req.body);
        if (error){
            return res.status(400).send(error.details[0].message);
        }
    
        course.name = req.body.name;
        res.send(course);
    };

    deleteCurrentCourse = (req,res) =>{
        const course = courses.find(c=> c.id ===parseInt(req.params.id));
        if(!course) {
            return res.status(404).send('course not found');
        }
        const index = courses.indexOf(course);
        courses.splice(index,1);
    
        res.send(course);
    };

    validateCourse(course) {
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        });
    
        return schema.validate(course);
    }
}

module.exports = new CourseController;