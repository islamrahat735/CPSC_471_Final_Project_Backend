const teacherAttendsClassModel = require("../models/teacherAttendsClassModel");

class TeacherAttendsClassController{
    findAll= (req, res) =>{
        teacherAttendsClassModel.findAll((err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    findOne = (req, res) =>{
        const {tId} = req.params
        teacherAttendsClassModel.findOne(tId, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    add = (req, res) =>{
        const{tId, cId, date} = req.body
        teacherAttendsClassModel.add(tId, cId, date, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(req.body)
            }
        })
    }
}

module.exports = new TeacherAttendsClassController