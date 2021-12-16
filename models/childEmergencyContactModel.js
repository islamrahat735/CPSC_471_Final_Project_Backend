const db = require("../repos/db");

class ChildEmergencyContactModel{

    findAll = (callback) => {
        db.query('SELECT * FROM Child_Emergency_Contact',(err,result)=>{
            if(err){
                callback(err,null);
                return;
            }
        
        callback(null, result);
        return;
    
        });
    }

    addChildEmergencyContact=(Pno, chId, relation, callback)=>{
        db.query(`INSERT INTO Child_Emergency_Contact(Pno, Ch_Id, Relation) VALUES(?,?,?)`, [Pno, chId, relation] ,(err,results)=>{
            
            if(err){
                callback(err,null)
            }
            else{
                callback(null,results);
            }

        })
    }

    findOne=(Pno, chId, callback)=>{
        db.query(`SELECT * FROM Child_Emergency_Contact WHERE Pno=? and Ch_Id = ?`,[Pno, chId] ,(err,results)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,results);
            }
          })
    }

    delete = (Pno, chId, callback)=>{
        db.query(`DELETE FROM Child_Emergency_Contact WHERE Pno= ? and Ch_Id = ?`,[Pno, chId], (err,results)=>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }

    getChildEmergencyContacts = (chId, callback) => {
        db.query('SELECT * FROM Child_Emergency_Contact WHERE Ch_Id = ?', [chId], (err,results) =>{
            if(err){
                callback(err, null);
            }
            else{
                
                callback(null, results);
            }
        })
    };

}

module.exports = new ChildEmergencyContactModel;