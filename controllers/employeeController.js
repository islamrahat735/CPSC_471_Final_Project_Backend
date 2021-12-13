const employeeModel = require("../models/employeeModel");

class employeeController{
    findAll=(req,res) => {
        employeeModel.findAll((err,result) => {
            if(err){
                res.status(500).send(err);
                return;
            }
            else{
            res.status(200).send(result);
            }
        })
    }
    addemployee=(req,res) => {
        const {Address, Fname, Lname, Phone_num, MR_Id} = req.body;
        employeeModel.addemployee(Address,Fname,Lname,Phone_num,MR_Id, (err,result)=> {
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
        employeeModel.findOne(eid, (err,data) => {
            if(err){
                res.status(500).send(err);    
            }
            else{
                if(Object.keys(data).length===0){
                    res.status(404).send({msg: "employee doesn't exist"});
                }
                else{
                    res.status(200).send(data);
                }
            }
        })
    }
    updatemployee = (req, res) => {
        const {E_Id, Address, Fname, Lname, Phone_num} = req.body
        employeeModel.findOne(pid, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "Employee doesn't exist"});
                }
                else{
                    employeeModel.updateemployee(E_Id, Address, Fname, Lname, Phone_num,
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
        employeeModel.findOne(eid, (err,data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length ===0){
                    res.status(404).send({msg: "employee doesn't exist"});
                }
                else{
                    employeeModel.delete(eid,(err,data) => {
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

module.exports = new employeeController;