EmergencyContactModel = require('../models/emergencyContactModel');

class EmergencyContactController{


    findAll = (req, res) =>{
        EmergencyContactModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(200).send(data);
            }
        })
    }

    addEmergencyContact=(req,res)=>{
        const{Pno, Name}=req.body
        EmergencyContactModel.addEmergencyContact(Pno,Name,(err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body);
            }
        })
    }


    findOne=(req,res)=>{
        const Pno=req.params.Pno;
        EmergencyContactModel.findOne(Pno,(err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0){
                    res.status(404).send({msg:"account does not exist"});
                }
                else{
                    res.status(200).send(data);
                }

            }
        })
    }
    delete =(req,res)=> {
        const Pno=req.params.Pno;
       
        EmergencyContactModel.findOne(Pno, (err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0)
                {
                    res.status(404).send({msg:"account does not exist"});
                }
                else{
                    EmergencyContactModel.delete(Pno,(err,data)=>{
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

}
module.exports = new EmergencyContactController