const ProgramModel = require("../models/programModel");

class ProgramController{
    findAll = (req, res) =>{
        ProgramModel.findAll((err, data) =>{
            if(err){
                res.status(500).send(err)
            } else{
                res.status(200).send(data)
            } 
        })
    }

    findProgram = (req, res) =>{
        const {progName} = req.params
        ProgramModel.findProgram(progName, (err, data) =>{
            if(err){
                res.status(500).send(err);
            }
            else if(Object.keys(data) === 0){
                res.status(404).send({msg : "Program doesn't exist"})
            }
            else{
                res.status(200).send(data);
            }
        })
        
    }

    addProgram = (req, res) =>{
        ProgramModel.addProgram(req.body, (err, data) =>{
            if(err){
                res.status(500).send(err)
            } else{
                res.status(200).send(data)
            } 
        });
    }

    updateProgram = (req, res) =>{
        ProgramModel.updateProgram(req.body, (err, data) =>{
            if(err){
                res.status(500).send(err)
            }
            else if(data.affectedRows === 0){res.status(404).send({msg : "program not found"})} 
            else{
                res.status(200).send(req.body)
            } 
        });
    }

    deleteProgram = (req, res) =>{
        const {progName} = req.params
        ProgramModel.deleteProgram(progName,(err, data) =>{
            if(err){
                res.status(500).send(err)
            }
            else if(data.affectedRows === 0){res.status(404).send({msg : "program not found"})} 
            else{
                res.status(200).send({msg: "success!"})
            } 
        } )
        
    }
}

module.exports = new ProgramController