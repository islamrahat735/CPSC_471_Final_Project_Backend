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

    delete = (chId, cId, date, callback) =>{
        db.query(`DELETE FROM Child_Attends_Class WHERE Child_Id = ? and C_Id = ? and Date = ?`
        , [chId, cId, date], (err, results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    contactTrace = (chId ,cId, date, callback) =>{

        db.query(`SELECT C.Child_Id, C.Fname, C.Lname, M.Covid_Status, M.MR_Id FROM Child_Attends_Class as A, Child as C, Medical_Record as M 
        WHERE A.Child_Id = C.Child_Id and C.MR_Id = M.MR_Id  and M.Covid_Status = "negative" and
        A.C_Id = ? and A.date =? and C.Child_Id <> ?`, [cId, date, chId], (err, result) =>{
            if(err){
                callback(err, null)
            }else{
                callback(null, result)
            }
        })

    }

    
}

module.exports = new ChildAttendsClassModel