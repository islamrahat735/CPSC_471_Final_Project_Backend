caretakerModel=require('../models/caretakerModel');

class caretakerController{

    findAll = (req, res) =>{
        caretakerModel.findAll((err, data) => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(200).send(data);
            }
        })
    }

    addcaretaker=(req,res)=>{
        const{E_Id}=req.body
        caretakerModel.addcaretaker(E_Id,(err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(req.body);
            }
        })
    }


    findOne=(req,res)=>{
        const E_Id=req.params.E_Id;
        caretakerModel.findOne(E_Id,(err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0){
                    res.status(404).send({msg:"caretaker does not exist"});
                }
                else{
                    res.status(200).send(data);
                }

            }
        })
    }
    delete =(req,res)=> {
        const E_Id=req.params.E_Id;
       
        caretakerModel.findOne(E_Id, (err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length===0)
                {
                    res.status(404).send({msg:"caretaker does not exist"});
                }
                else{
                    caretakerModel.delete(E_Id,(err,data)=>{
                        if(err){
                            console.log(err);
                            res.status(500).send(err);
                        }
                        else{
                            res.status(200).send({msg:"success!"});
                        }
                    });
                }
            }
            })
    }
    updatecaretaker = (req, res) => {
        const {E_Id} = req.body
        caretakerModel.findOne(E_Id, (err, data) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                if(Object.keys(data).length === 0){
                    res.status(404).send({msg : "ID doesn't exist"});
                }
                else{
                    caretakerModel.updatecaretaker(E_Id,
                        (err, results) =>{
                            if(err){
                                res.status(500).send(err);
                            }
                            else{
                                res.status(200).send(results);
                            }
                        })
                }
            }
        })
        
    };
}
module.exports = new caretakerController

