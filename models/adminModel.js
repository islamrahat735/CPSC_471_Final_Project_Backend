const db = require('../repos/db')

class adminModel{

    findAll = (result) => {
        db.query('SELECT * FROM Admin', (err, results) => {
            if(err){
                result(err, null);
                return;
            }
            result(null, results);
            return;
        });
    }
    findOne = (eid, result) => {
        db.query(`SELECT * FROM Admin WHERE E_Id = "${eid}"`, (err, results) =>{
            if(err){
                result(err, null);
            }
            else{
                result(null, results);
            }
        })
    }
    addadmin = (username, eid, callback) => {
        db.query(`INSERT INTO Admin(E_Id,Username) VALUES(?,?)`,[eid, username],
         (err, results) =>{
           if(err){
               callback(err, null);
           }
           else{
               db.query(`SELECT * FROM Admin as A
                        WHERE  A.E_Id IN
                        (SELECT Max(E_Id)
                        FROM Admin)`, (err, results)=>{
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
        db.query(`DELETE FROM Admin WHERE E_ID = "${eid}"`, (err, results) => {
            if(err){
                result(err, null);
            }
            else{
                result(null, result);
            }
        });
    }
}

module.exports = new adminModel;
