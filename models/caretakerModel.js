const db = require('../repos/db')

class caretakerModel{
    findAll = (callback) =>{
        db.query('SELECT * FROM Caretaker',(err,result)=>{
            if(err){
                callback(err,null);
                return;
            }
        
        callback(null, result);
        return;
    
        });
    }
    addcaretaker=(E_Id, callback)=>{
        db.query(`INSERT INTO Caretaker VALUES('${E_Id}')` ,(err,results)=>{
            
            if(err){
                callback(err,null)
            }
            else{
                callback(null,results);
            }

        })
    }
    
  findOne=(E_Id,callback)=>{
      db.query(`SELECT * FROM Caretaker WHERE E_Id="${E_Id}"`,(err,results)=>{
          if(err){
              callback(err,null);
          }
          else{
              callback(null,results);
          }
        })
    }
    delete = (E_Id,callback)=>{
        db.query(`DELETE FROM Caretaker WHERE E_Id= "${E_Id}"`,(err,results)=>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }
    updatecaretaker = (E_Id, callback) => {
        db.query(
            `UPDATE Caretaker
            SET 
                E_Id = '${E_Id}'

            WHERE
                E_Id = ${E_Id}`, (err, results) =>{
                    if(err){
                        callback(err, null);
                    }
                    else{
                        db.query(`SELECT * FROM Caretaker as C
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



module.exports = new caretakerModel;
