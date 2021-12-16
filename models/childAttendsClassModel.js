const db = require('../repos/db')

class ChildAttendsClassModel{
    findAll = (callback) =>{
        db.query(`SELECT * FROM Child_Attends_Class`, (err, results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    findOne = (chId, callback) =>{
        db.query(`SELECT * FROM Child_Attends_Class WHERE Child_Id = ?`,[chId], (err, results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    add = (chId, cId, date, callback) =>{
        db.query(`INSERT INTO Child_Attends_Class(Child_Id, Date, C_Id) Values(?,?,?)`,[chId,date,cId], (err,results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    
}

module.exports = new ChildAttendsClassModel