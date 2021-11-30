AccountModel = require('../models/accountModel');


class AccountController{

    findAll = (req, res) => {
        AccountModel.findAll((err, result) => {
            if(err){
                res.status(500).send(err);
                return;
            }
            else{
                res.status(200).send(result);
            }
        })
    }

    addAccount = (req, res) => {
        const {username, password, access} = req.body
        AccountModel.addAccount(username,password, access, (err,result)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body);
            }
        })
    }

    findOne = (req, res) => {
        const username = req.params.username;
        AccountModel.findOne(username, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "account doesn't exist"});
                }
                else{
                    res.status(200).send(data);
                }
            }
        })
    }

    delete = (req, res) => {
        const username = req.params.username;
        
        AccountModel.findOne(username, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg: "account doesn't exist"});
                }
                else{
                    AccountModel.delete(username, (err, data) => {
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

module.exports = new AccountController;
