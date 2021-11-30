ParentModel = require('../models/parentModel');

class ParentController{
    findall = (req, res) => {
            ParentModel.findAll((err, result) => {
            if(err){
                res.status(500).send(err);
                return;
            }
            else{
                res.status(200).send(result);
            }
        })
    }

    findOne = (req, res) => {
        const pid = req.params.pid;
        ParentModel.findOne(pid, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "Parent doesn't exist"});
                }
                else{
                    res.status(200).send(data);
                }
            }
        })
    }
    
    addParent = (req, res) => {
        const {address, fname, lname, phone, fees, username} = req.body
        console.log(fees === 0);
        ParentModel.addParent(address, fname, lname, phone, fees, username, (err,result)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(result);
            }
        })
    }

    updateParent = (req, res) => {
        const {pid, address, fname, lname, phone, fees} = req.body
        ParentModel.findOne(pid, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "Parent doesn't exist"});
                }
                else{
                    ParentModel.updateParent(pid, address, fname, lname, phone, fees, username,
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

    delete = (req, res) => {
        const pid = req.params.pid;
        
        ParentModel.findOne(pid, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg: "account doesn't exist"});
                }
                else{
                    ParentModel.delete(pid, (err, data) => {
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

module.exports = new ParentController