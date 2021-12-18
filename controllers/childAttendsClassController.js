
const childAttendsClassModel = require("../models/childAttendsClassModel");

class ChildAttendsClassController{
    findAll= (req, res) =>{
        childAttendsClassModel.findAll((err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    findOne = (req, res) =>{
        const {chId} = req.params
        childAttendsClassModel.findOne(chId, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    add = (req, res) =>{
        const{chId, cId, date} = req.body
        childAttendsClassModel.add(chId, cId, date, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(req.body)
            }
        })
    }

    delete = (req, res) =>{
        const {chId, cId, date} = req.params;
        childAttendsClassModel.delete(chId,cId,date, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    contactTrace = (req, res) =>{
        const {chId, cId, date} = req.params;
        childAttendsClassModel.contactTrace(chId,cId,date, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })

    }
}

module.exports = new ChildAttendsClassController;