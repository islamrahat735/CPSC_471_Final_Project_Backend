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
            else if(data.affectedRows === 0){ res.status(404).send({msg : "child not found"}) }
            else{
                res.status(200).send(data)
            }
        })
    };

    deleteChild = (req, res) =>{
        const chId = req.params.chId;

        ChildModel.deleteChild(chId, (err, data) => {
            if(err){res.status(500).send(err)}
            else if(data.affectedRows === 0){ res.status(404).send({msg : "child not found"}) }
            else{
                res.status(200).send({msg : "success"})
            }
        })
    };

    findChildrenOfParent = (req, res) => {
        const pid = req.params.pid
        ChildModel.getAllChildrenOfParent(pid,(err,data) =>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data)
            }
        })
    };

    findChildrenOfParentByUsername = (req, res) => {
        const username = req.params.username
        ChildModel.getAllChildrenOfParentByUsername(username,(err,data) =>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data)
            }
        })
    };

}

module.exports = new ChildController  