const childEmergencyContactModel = require("../models/childEmergencyContactModel");

class ChildEmergencyContactController{
    findAll = (req, res) => {
        childEmergencyContactModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })

        
    }

    getChildEmergencyContacts = (req,res) => {
        const chId = req.params.chId
        childEmergencyContactModel.getChildEmergencyContacts(chId, (err,data)=> {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }
    addChildEmergencyContact=(req,res)=>{
        const{Pno, chId, relation}=req.body
        childEmergencyContactModel.addChildEmergencyContact(Pno,chId, relation, (err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body);
            }
        })
    }

    findOne=(req,res)=>{
        const {Pno, chId}=req.params;
        const Id = parseInt(chId);
        childEmergencyContactModel.findOne(Pno, Id, (err,data)=>{
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
        const {Pno, chId}=req.params;
        const Id = parseInt(chId);
       
        childEmergencyContactModel.findOne(Pno, Id, (err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0)
                {
                    res.status(404).send({msg:"account does not exist"});
                }
                else{
                    childEmergencyContactModel.delete(Pno, chId, (err,data)=>{
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

module.exports = new ChildEmergencyContactController