const childAttendsFieldTripModel = require("../models/childAttendsFieldTripModel");

class ChildAttendsFieldTripController{
    findAll= (req, res) =>{
        childAttendsFieldTripModel.findAll((err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    findOne = (req, res) =>{
        const {chId} = req.params
        childAttendsFieldTripModel.findOne(chId, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    add = (req, res) =>{
        const{chId, trId} = req.body
        childAttendsFieldTripModel.add(chId, trId, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(req.body)
            }
        })
    }
}

module.exports = new ChildAttendsFieldTripController