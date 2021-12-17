const ClassModel = require("../models/classModel");

class ClassController{
    
    findAll = (req, res) =>{
        ClassModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }

    addClass = (req, res) =>{
        const{progName, className, startTime, endTime, tid} = req.body
        ClassModel.addClass(req.body, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data);
            }
        })
    }

    findOne = (req, res) =>{
        const cid = req.params.cid;
        ClassModel.findOne(cid, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    delete = (req, res) =>{
        const cid = req.params.cid;
        ClassModel.delete(cid, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    updateClass = (req, res) => {
        ClassModel.updateClass(req.body, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }
    
    findAllByTeacher = (req, res) =>{
        const {tid} = req.params
        ClassModel.findAllByTeacher(tid, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }

    getClassList = (req, res) =>{
        const {cId} = req.params;
        ClassModel.getClasslist(cId, (err, data) =>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }
}

module.exports = new ClassController