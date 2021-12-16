const HealthConditionModel = require("../../models/MedicalRecord/healthConditionModel");

class HealthConditionController{
    findAllById = (req, res) => {
        console.log("1st check");
        const mrid = req.params.mrid;
        HealthConditionModel.findAllById(mrid, (err, data) => {
            console.log("second check")
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
        const {mrid, condition} = req.params;
        HealthConditionModel.findOneById(mrid, condition, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else if (Object.keys(data) === 0){
                res.status(404).send({msg: "health record doesn't exist"});
            }
            else{
                res.status(200).send(data);
            }
        })
    }

    addConditionById = (req, res) =>{
        const {mrid, condition} = req.body;
        console.log(req.body);
        HealthConditionModel.addConditionById(mrid, condition, (err,data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body)
            }
        })
    }
   // updateConditionById = (req, res) =>{
       //}

    deleteConditionById = (req, res) =>{
        const {mrid , condition} = req.params;

        HealthConditionModel.findOneById(mrid,condition, (err, data) =>{
            if(err){ res.status(500).send(err) }
            else if (Object.keys(data) === 0){
                res.status(404).send({msg: "condition record doesn't exist"});
            }
            else{
                HealthConditionModel.deleteConditionById(mrid, condition, (err,data) =>{
                    if(err){res.status(500).send(err)}
                    else{
                        res.status(200).send({msg: "success!"});
                    }
                })
            }
        })
    }
}

module.exports = new HealthConditionController;