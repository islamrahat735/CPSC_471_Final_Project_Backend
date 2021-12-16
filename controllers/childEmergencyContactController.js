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

    findOneChild = (req,res) => {
        childEmergencyContactModel.findOneChild((err,data)=> {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }
    

    findOne=(req,res)=>{
        const {Pno, chId}=req.params;
        childEmergencyContactModel.findOne(Pno, chId, (err,data)=>{
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
       
        childEmergencyContactModel.findOne(Pno, chId, (err,data)=>{
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