const { object } = require("joi");
const MedicalRecordModel = require("../../models/MedicalRecord/medicalRecordModel");

class MedicalRecordController{
    
    findAll = (req, res) => {
        MedicalRecordModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data);
            }
        })

    }

    findOneById = (req, res) =>{
        const mrid = req.params.mrid;
        MedicalRecordModel.findOneById(mrid,(err, data) =>{
            if(err){
                res.status(500).send(err)
            }
            else{
                if(Object.keys(data) === 0){
                    res.status(404).send({msg: "medical record does not exist"})
                }
                else{
                    res.status(200).send(data)
                }
            }
        })
    }

    addRecord = (req, res) =>{

        const covidStatus = req.body.covidStatus;
        MedicalRecordModel.addRecord(covidStatus, (err,data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data)
            }
        })

    }

    updateRecord = (req, res) =>{

        const {mrid , covidStatus} = req.body;

        MedicalRecordModel.findOneById(mrid, (err, data) =>{
            if(err){ res.status(500).send(err) }
            else if (object.keys(data) === 0){
                res.status(404).send({msg: "account does not exist"});
            }
            else{
                MedicalRecordModel.updateRecord(mrid, covidStatus, (err,data) =>{
                    if(err){res.status(500).send(err)}
                    else{
                        res.status(200).send(data);
                    }
                })
            }
        })
    }

    deleteRecord = (req, res) =>{
        const mrid = req.param.mrid;

        MedicalRecordModel.deleteRecord(mrid, (err, data) => {
            if(err){res.status(500).send(err)}
            else{
                res.status(200).send({msg : "success!"})
            }
        })

    }
}

module.exports = new MedicalRecordController;