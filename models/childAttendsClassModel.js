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
        db.query(`SELECT A.Date, C.C_Id, C.Class_name, C.Prog_name FROM Child_Attends_Class as A, Class as C WHERE C.C_Id = A.C_Id and Child_Id = ?`,[chId], (err, results) =>{
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