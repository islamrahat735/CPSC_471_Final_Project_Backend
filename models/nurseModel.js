const db = require('../repos/db')

class nurseModel{
    findAll = (callback) =>{
        db.query('SELECT * FROM Nurse',(err,result)=>{
            if(err){
                callback(err,null);
                return;
            }
        
        callback(null, result);
        return;
    
        });
    }
    addnurse=(E_Id, callback)=>{
        db.query(`INSERT INTO Nurse VALUES('${E_Id}')` ,(err,results)=>{
            
            if(err){
                callback(err,null)
            }
            else{
                callback(null,results);
            }

        })
    }
    
  findOne=(E_Id,callback)=>{
      db.query(`SELECT * FROM Nurse WHERE E_Id="${E_Id}"`,(err,results)=>{
          if(err){
              callback(err,null);
          }
          else{
              callback(null,results);
          }
        })
    }
    delete = (E_Id,callback)=>{
        db.query(`DELETE FROM Nurse WHERE E_Id= "${E_Id}"`,(err,results)=>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }
    updatenurse = (E_Id, callback) => {
        db.query(
            `UPDATE Nurse
            SET 
                E_Id = '${E_Id}'

            WHERE
                E_Id = ${E_Id}`, (err, results) =>{
                    if(err){
                        callback(err, null);
                    }
                    else{
                        db.query(`SELECT * FROM Nurse as N
                        WHERE  E_Id = ${E_Id}`, (err, results)=>{
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

}



module.exports = new nurseModel;
