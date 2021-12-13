const db = require('../repos/db')

class employeeModel{

    findAll = (result) => {
        db.query('SELECT * FROM Employee', (err, results) => {
            if(err){
                result(err, null);
                return;
            }
            result(null, results);
            return;
        });
    }
    findOne = (eid, result) => {
        db.query(`SELECT * FROM Employee WHERE E_Id = "${eid}"`, (err, results) =>{
            if(err){
                result(err, null);
            }
            else{
                result(null, results);
            }
        })
    }
    addemployee = (Address, Fname, Lname, Phone_num, MR_Id, callback) => {
        db.query(`INSERT INTO Employee(Address, Fname, Lname, Phone_num, MR_Id) VALUES('${Address}','${Fname}', '${Lname}','${Phone_num}', ${MR_Id})`,
         (err, results) =>{
           if(err){
               callback(err, null);
           }
           else{
               db.query(`SELECT * FROM Employee as E
                        WHERE  E.E_Id IN
                        (SELECT Max(E_Id)
                        FROM Employee)`, (err, results)=>{
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

    updateemployee = (eid, Address, Fname, Lname, Phone_num, callback) => {
        db.query(
            `UPDATE Employee
            SET 
                Address = '${Address}',
                Fname = '${Fname}',
                Lname = '${Lname}',
                Phone_num = '${Phone_num}'
            WHERE
                E_Id = ${eid}`, (err, results) =>{
                    if(err){
                        callback(err, null);
                    }
                    else{
                        db.query(`SELECT * FROM Employee as E
                        WHERE  E.E_Id = ${eid}`, (err, results)=>{
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
        db.query(`DELETE FROM Employee WHERE E_ID = "${eid}"`, (err, results) => {
            if(err){
                result(err, null);
            }
            else{
                result(null, result);
            }
        });
    }
}

module.exports = new employeeModel;
