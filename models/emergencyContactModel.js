const db = require('../repos/db')

class EmergencyContactModel{
    findAll = (callback) =>{
        db.query('SELECT * FROM Emergency_Contact',(err,result)=>{
            if(err){
                callback(err,null);
                return;
            }
        
        callback(null, result);
        return;
    
        });
    }
    addEmergencyContact=(Pno, Name, callback)=>{
        db.query(`INSERT INTO Emergency_Contact VALUES('${Pno}','${Name}')` ,(err,results)=>{
            
            if(err){
                callback(err,null)
            }
            else{
                callback(null,results);
            }

        })
    }
    
  findOne=(Pno,callback)=>{
      db.query(`SELECT * FROM Emergency_Contact WHERE Pno="${Pno}"`,(err,results)=>{
          if(err){
              callback(err,null);
          }
          else{
              callback(null,results);
          }
        })
    }
delete = (Pno,callback)=>
db.query(`DELETE FROM EmergencyContact WHERE Pno= "${Pno}"`,(err,results)=>{
    if(err){
        callback(err, null);
    }
    else{
        callback(null, results);
    }
    })
}



module.exports = new EmergencyContactModel;
