const AllergyModel = require("../../models/MedicalRecord/allergyModel");


class AllergyController{
    findAllById = (req, res) => {

        console.log("First Check");
        const mrid = req.params.mrid;
        AllergyModel.findAllById(mrid, (err, data) => {
            console.log("Second Check")
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
        const {mrid, allergy} = req.params;
        AllergyModel.findOneById(mrid, allergy, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else if (Object.keys(data) === 0){
                res.status(404).send({msg: "allergy record does not exist"});
            }
            else{
                res.status(200).send(data);
            }
        })
    }

    addAllergyById = (req, res) =>{
        const {mrid, allergy} = req.body;
        AllergyModel.addAllergyById(mrid, allergy, (err,data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body)
            }
        })
    }


    //updateAllergyById = (req, res) =>{

    //}

    deleteAllergyById = (req, res) =>{
        const {mrid , allergy} = req.params;

        AllergyModel.findOneById(mrid,allergy, (err, data) =>{
            if(err){ res.status(500).send(err) }
            else if (Object.keys(data) === 0){
                res.status(404).send({msg: "allergy record does not exist"});
            }
            else{
                AllergyModel.deleteAllergyById(mrid, allergy, (err,data) =>{
                    if(err){res.status(500).send(err)}
                    else{
                        res.status(200).send({msg: "success!"});
                    }
                })
            }
        })

    }
}

module.exports = new AllergyController;