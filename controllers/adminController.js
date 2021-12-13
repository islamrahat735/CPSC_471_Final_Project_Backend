const adminModel = require("../models/adminModel");

class adminController{
    findAll=(req,res) => {
        adminModel.findAll((err,result) => {
            if(err){
                res.status(500).send(err);
                return;
            }
            else{
            res.status(200).send(result);
            }
        })
    }
    addadmin=(req,res) => {
        const {Username, E_Id} = req.body;
        adminModel.addadmin(Username, E_Id, (err,result)=> {
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
        adminModel.findOne(eid, (err,data) => {
            if(err){
                res.status(500).send(err);    
            }
            else{
                if(Object.keys(data).length===0){
                    res.status(404).send({msg: "admin id doesn't exist"});
                }
                else{
                    res.status(200).send(data);
                }
            }
        })
    }
    
    updatadmin = (req, res) => {
        const {E_Id} = req.body
        adminModel.findOne(eid, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "admin doesn't exist"});
                }
                else{
                    adminModel.updateadmin(E_Id,
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
        adminModel.findOne(eid, (err,data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length ===0){
                    res.status(404).send({msg: "admin doesn't exist"});
                }
                else{
                    adminModel.delete(eid,(err,data) => {
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

module.exports = new adminController;