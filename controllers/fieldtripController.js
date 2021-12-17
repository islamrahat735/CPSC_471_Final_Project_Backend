const fieldtripModel = require("../models/fieldtripModel");

class fieldtripController{
    
    findAll = (req, res) =>{
        fieldtripModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }

    addfieldtrip = (req, res) =>{
        const{program, location, tid} = req.body
        fieldtripModel.addfieldtrip(req.body, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data);
            }
        })
    }

    findOne = (req, res) =>{
        const tripid = req.params.tripid;
        fieldtripModel.findOne(tripid, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    delete = (req, res) =>{
        const tripid = req.params.tripid;
        fieldtripModel.delete(tripid, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }

    updatefieldtrip = (req, res) => {
        fieldtripModel.updatefieldtrip(req.body, (err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    }
}

module.exports = new fieldtripController