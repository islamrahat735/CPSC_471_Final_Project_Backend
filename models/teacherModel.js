const db = require('../repos/db')

class teacherModel{

    findAll = (result) => {
        db.query('SELECT * FROM Teacher', (err, results) => {
            if(err){
                result(err, null);
                return;
            }
            result(null, results);
            return;
        });
    }
    findOne = (eid, result) => {
        db.query(`SELECT * FROM Teacher WHERE E_Id = "${eid}"`, (err, results) =>{
            if(err){
                result(err, null);
            }
            else{
                result(null, results);
            }
        })
    }
    addteacher = (username, eid, callback) => {
        db.query(`INSERT INTO Teacher (E_Id,Username) VALUES(?,?)`,[eid, username],
         (err, results) =>{
           if(err){
               callback(err, null);
           }
           else{
               db.query(`SELECT * FROM Teacher as T
                        WHERE  T.E_Id IN
                        (SELECT Max(E_Id)
                        FROM Teacher)`, (err, results)=>{
                            if(err){
                                callback(err, null);
                            }
                            else{
                                callback(null, results);
                            }
                        })
           } 
        })
    };
    
    delete=(eid, result) => {
        db.query(`DELETE FROM Teacher WHERE E_ID = "${eid}"`, (err, results) => {
            if(err){
                result(err, null);
            }
            else{
                result(null, result);
            }
        });
    }

    getTeacherIDFromUsername = (username, callback) => {
        db.query(`SELECT E_ID FROM Teacher WHERE Username = ?`, [username], (err, result) => {
            if(err){
                callback(err, null);
            }
            else{
                callback(null, result);
            }
        })
    }
}

module.exports = new teacherModel;
