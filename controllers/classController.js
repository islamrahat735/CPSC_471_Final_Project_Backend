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
}