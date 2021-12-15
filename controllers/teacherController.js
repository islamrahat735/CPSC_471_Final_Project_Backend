const teacherModel = require("../models/teacherModel");

class teacherController{
    findAll=(req,res) => {
        teacherModel.findAll((err,result) => {
            if(err){
                res.status(500).send(err);
                return;
            }
            else{
            res.status(200).send(result);
            }
        })
    }
    addteacher=(req,res) => {
        const {Username, E_Id} = req.body;
        teacherModel.addteacher(Username, E_Id, (err,result)=> {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(result);
            }
        })
    }
    
    findOne=(req,res)=>{
        const eid=req.params.eid;
        teacherModel.findOne(eid, (err,data) => {
            if(err){
                res.status(500).send(err);    
            }
            else{
                if(Object.keys(data).length===0){
                    res.status(404).send({msg: "teacher id doesn't exist"});
                }
                else{
                    res.status(200).send(data);
                }
            }
        })
    }
    
    updateteacher = (req, res) => {
        const {E_Id} = req.body
        teacherModel.findOne(eid, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "teacher doesn't exist"});
                }
                else{
                    adminModel.updateteacher(E_Id,
                        (err, results) =>{
                            if(err){
                                res.status(500).send(err);
                            }
                            else{
                                res.status(200).send(results);
                            }
                        })
                }
            }
        })
        
    };

    delete = (req,res) => {
        const eid = req.params.eid;
        teacherModel.findOne(eid, (err,data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length ===0){
                    res.status(404).send({msg: "teacher doesn't exist"});
                }
                else{
                    teacherModel.delete(eid,(err,data) => {
                        if(err){
                            console.log(err);
                            res.status(500).send(err);
                        }
                        else{
                            res.status(200).send({msg : "success!"});
                        }
                    });
                }
            }
        })
    }
}

module.exports = new teacherController;