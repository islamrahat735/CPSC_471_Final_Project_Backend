const ChildModel = require("../models/childModel");


class ChildController{

    findall = (req, res) => {
        ChildModel.findall((err,data) =>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data)
            }
        })
    };

    findChild = (req, res) => {
        const chId = req.params.chId
        ChildModel.findChild(chId,(err,data) =>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data)
            }
        })
    };

    addChild = (req, res) =>{
        ChildModel.addChild(req.body, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data)
            }
        })
    };

    updateChild = (req, res) =>{
        ChildModel.updateChild(req.body, (err, data) =>{
            if(err){
                res.status(500).send(err)
            }
            else if(data.affectedRows === 0){ res.status(400).send({msg : "child not found"}) }
            else{
                res.status(200).send(data)
            }
        })
    };

    deleteChild = (req, res) =>{
        const chId = req.params.chId;

        ChildModel.deleteChild(chId, (err, data) => {
            if(err){res.status(500).send(err)}
            else if(data.affectedRows === 0){ res.status(400).send({msg : "child not found"}) }
            else{
                res.status(200).send({msg : "success"})
            }
        })
    };

}

module.exports = new ChildController  