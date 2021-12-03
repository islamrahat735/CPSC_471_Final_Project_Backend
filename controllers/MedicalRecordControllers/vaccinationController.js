const VaccinationModel = require("../../models/MedicalRecord/vaccinationModel");

class VaccinationController{
    findAllById = (req, res) => {
        console.log("hi");
        const mrid = req.params.mrid;
        VaccinationModel.findAllById(mrid, (err, data) => {
            console.log("made it here")
            if(err){
                res.status(500).send(err);
            }
            else{
                console.log(data)
                res.status(200).send(data);
            }
        })
    }

    findOneById = (req, res) =>{
        const {mrid, vaccine} = req.params;
        VaccinationModel.findAllById(mrid, vaccine, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data);
            }
        })
    }

    addVaccineById = (req, res) =>{
        const {mrid, vaccine} = req.body;
        VaccinationModel.addVaccineById(mrid, vaccine, (err,data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data)
            }
        })
    }

    updateVaccineById = (req, res) =>{

        const {mrid , vaccine} = req.body;

        VaccinationModel.findOneById(mrid,vaccine, (err, data) =>{
            if(err){ res.status(500).send(err) }
            else if (object.keys(data) === 0){
                res.status(404).send({msg: "vaccine record does not exist"});
            }
            else{
                VaccinationModel.updateVaccineById(mrid, vaccine, (err,data) =>{
                    if(err){res.status(500).send(err)}
                    else{
                        res.status(200).send(data);
                    }
                })
            }
        })

    }

    deleteVaccineById = (req, res) =>{
        const {mrid , vaccine} = req.body;

        VaccinationModel.findOneById(mrid,vaccine, (err, data) =>{
            if(err){ res.status(500).send(err) }
            else if (object.keys(data) === 0){
                res.status(404).send({msg: "vaccine record does not exist"});
            }
            else{
                VaccinationModel.deleteVaccineById(mrid, vaccine, (err,data) =>{
                    if(err){res.status(500).send(err)}
                    else{
                        res.status(200).send({msg: "success!"});
                    }
                })
            }
        })

    }
}

module.exports = new VaccinationController;