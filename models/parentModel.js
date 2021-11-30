const db = require('../repos/db')

class ParentModel{
    findAll = (result) => {
    
        db.query('SELECT * FROM Primary_Parent', (err, results, fields) =>{
                if (err){
                    result(err, null);
                    return;
                }
                //console.log(results);
                result(null, results);
                return;
                
            });   
    }

    findOne = (pid, result) => {
        db.query(`SELECT * FROM Primary_Parent WHERE P_Id = "${pid}"`, (err, results) =>{
            if(err){
                result(err, null);
            }
            else{
                result(null, results);
            }
        })
    }

    addParent = (Address, Fname, Lname, phone, fees, username, callback) => {
        db.query(`INSERT INTO Primary_Parent(Address, Fname, Lname, Phone_num, Fees, Username) VALUES('${Address}','${Fname}', '${Lname}','${phone}', ${fees}, '${username}')`,
         (err, results) =>{
           if(err){
               callback(err, null);
           }
           else{
               db.query(`SELECT * FROM Primary_Parent as P
                        WHERE  P.P_Id IN
                        (SELECT Max(P_Id)
                        FROM Primary_Parent)`, (err, results)=>{
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

    updateParent = (pid, Address, Fname, Lname, phone, fees, callback) => {
        db.query(
            `UPDATE Primary_Parent
            SET 
                Address = '${Address}',
                Fname = '${Fname}',
                Lname = '${Lname}',
                Phone_num = '${phone}',
                Fees = ${fees}
            WHERE
                P_Id = ${pid}`, (err, results) =>{
                    if(err){
                        callback(err, null);
                    }
                    else{
                        db.query(`SELECT * FROM Primary_Parent as P
                        WHERE  P.P_Id = ${pid}`, (err, results)=>{
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

    delete = (pid, result) => {
        db.query(`DELETE FROM Primary_Parent WHERE P_Id = ${pid}`, (err, results) =>{
            if(err){
                result(err, null);
            }
            else{
                result(null, result);
            }
        });
    }
}

module.exports = new ParentModel