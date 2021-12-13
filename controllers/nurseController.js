nurseModel=require('../models/nurseModel');

class nurseController{

    findAll = (req, res) =>{
        nurseModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(200).send(data);
            }
        })
    }

    addnurse=(req,res)=>{
        const{E_Id}=req.body
        nurseModel.addnurse(E_Id,(err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body);
            }
        })
    }


    findOne=(req,res)=>{
        const E_Id=req.params.E_Id;
        nurseModel.findOne(E_Id,(err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0){
                    res.status(404).send({msg:"nurse ID does not exist"});
                }
                else{
                    res.status(200).send(data);
                }

            }
        })
    }
    delete =(req,res)=> {
        const E_Id=req.params.E_Id;
       
        nurseModel.findOne(E_Id, (err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0)
                {
                    res.status(404).send({msg:"nurse does not exist"});
                }
                else{
                    nurseModel.delete(E_Id,(err,data)=>{
                        if(err){
                            console.log(err);
                            res.status(500).send(err);
                        }
                        else{
                            res.status(200).send({msg:"success!"});
                        }
                    });
                }
            }
            })
    }
    updatenurse = (req, res) => {
        const {E_Id} = req.body
        nurseModel.findOne(E_Id, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "ID doesn't exist"});
                }
                else{
                    nurseModel.updatenurse(E_Id,
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
}
module.exports = new nurseController

