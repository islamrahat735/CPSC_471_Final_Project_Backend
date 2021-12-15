const db = require('../repos/db')

class TeacherAttendsClassModel{
    findAll = (callback) =>{
        db.query(`SELECT * FROM Teacher_Attends_Class`, (err, results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    findOne = (tid, callback) =>{
        db.query(`SELECT * FROM Teacher_Attends_Class WHERE T_Id = ?`,[tid], (err, results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    add = (tId, cId, date, callback) =>{
        db.query(`INSERT INTO Teacher_Attends_Class(T_Id, Date, C_Id) Values(?,?,?)`,[tId,date,cId], (err,results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }
}

module.exports = new TeacherAttendsClassModel