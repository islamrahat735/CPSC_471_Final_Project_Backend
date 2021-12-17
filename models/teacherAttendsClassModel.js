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
        db.query(`SELECT A.Date, C.C_Id, C.Class_name, C.Prog_name FROM Teacher_Attends_Class as A, Class as C WHERE C.C_Id = A.C_Id and A.T_Id = ?`,[tid], (err, results) =>{
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