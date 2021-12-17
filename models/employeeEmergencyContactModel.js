const db = require("../repos/db");

class EmployeeEmergencyContactModel{

    findAll = (callback) => {
        db.query('SELECT * FROM Employee_Emergency_Contact',(err,result)=>{
            if(err){
                callback(err,null);
                return;
            }
        
        callback(null, result);
        return;
    
        });
    }

    addEmployeeEmergencyContact=(Pno, eid, relation, callback)=>{
        db.query(`INSERT INTO Employee_Emergency_Contact(Pno, E_Id, Relation) VALUES(?,?,?)`, [Pno, eid, relation] ,(err,results)=>{
            
            if(err){
                callback(err,null)
            }
            else{
                callback(null,results);
            }

        })
    }

    findOne=(Pno, eid, callback)=>{
        db.query(`SELECT * FROM Employee_Emergency_Contact WHERE Pno=? and E_Id = ?`,[Pno, eid] ,(err,results)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,results);
            }
          })
    }

    delete = (Pno, eid, callback)=>{
        db.query(`DELETE FROM Employee_Emergency_Contact WHERE Pno= ? and E_Id = ?`,[Pno, eid], (err,results)=>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }

    getEmployeeEmergencyContacts = (eId, callback) => {
        db.query(`SELECT E.Name, E.Pno, C.Relation FROM Employee_Emergency_Contact As C, Emergency_Contact as E 
        WHERE E.Pno = C.Pno and C.E_Id = ?`, [eId], (err,results) =>{
            if(err){
                callback(err, null);
            }
            else{
                
                callback(null, results);
            }
        })
    };

}

module.exports = new EmployeeEmergencyContactModel;