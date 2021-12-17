const employeeEmergencyContactModel = require("../models/employeeEmergencyContactModel");

class EmployeeEmergencyContactController{
    findAll = (req, res) => {
        employeeEmergencyContactModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })

        
    }

    
    addEmployeeEmergencyContact=(req,res)=>{
        const{Pno, eid, relation}=req.body
        employeeEmergencyContactModel.addEmployeeEmergencyContact(Pno,eid, relation, (err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body);
            }
        })
    }


    findOne=(req,res)=>{
        const {Pno, eid}=req.params;
        employeeEmergencyContactModel.findOne(Pno, eid, (err,data)=>{
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
        const {Pno, eid}=req.params;
       
        employeeEmergencyContactModel.findOne(Pno, eid, (err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0)
                {
                    res.status(404).send({msg:"account does not exist"});
                }
                else{
                    employeeEmergencyContactModel.delete(Pno, eid, (err,data)=>{
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

    getEmployeeEmergencyContacts = (req,res) => {
        const eId = req.params.eId
        employeeEmergencyContactModel.getEmployeeEmergencyContacts(eId, (err,data)=> {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }
}

module.exports = new EmployeeEmergencyContactController