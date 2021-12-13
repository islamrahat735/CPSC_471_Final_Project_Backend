const db = require("../repos/db");

class ChildModel{
    
    findall = (callback) => {
        db.query('SELECT * FROM Child', (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                //results[0].Dob = this.dateToFormattedTime(results[0].Dob)
                callback(null, results.map(x =>{
                    x.Dob = this.dateToFormattedTime(x.Dob)
                    return x;
                }))
            }
        })
    };

    findChild = (chId, callback) => {
        db.query('SELECT * FROM Child WHERE Child_Id = ? ',[chId], (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                results[0].Dob = this.dateToFormattedTime(results[0].Dob)
                callback(null, results);
            }
        })
    };

    addChild = (args, callback) =>{
        const {chId, pid, prog, address, fName, lName, status, dob, mrid} = args;
        db.query(`INSERT INTO Child(P_Id, Prog_name, Address, Fname, Lname, status, Dob, MR_Id)
        VALUES( ?, ?, ?, ?, ?, ?, ?, ? )`, [pid, prog, address, fName, lName, status, dob, mrid], (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                db.query(`SELECT * FROM Child as C
                        WHERE  C.Child_Id IN
                        (SELECT Max(Child_Id)
                        FROM Child)`, (err, results)=>{
                            if(err){
                                callback(err, null);
                            }
                            else{
                                results[0].Dob = this.dateToFormattedTime(results[0].Dob)
                                callback(null, results);
                            }
                        })
            }
        })
    };

    updateChild = (args, callback) =>{
        const {chId, pid, prog, address, fName, lName, status, dob, mrid} = args;
        db.query(`
            UPDATE Child
            SET
                P_Id = ? ,
                Prog_name = ? ,
                Address = ? ,
                Fname = ? ,
                Lname = ? ,
                status = ? ,
                Dob = ? ,
                MR_Id = ?
            WHERE Child_Id = ? `, [pid, prog, address, fName, lName, status, dob, mrid, chId],
            (err, results) =>{
                if(err){
                    callback(err, null)
                }else{
                    callback(null, results)
                }
            } )
    };

    deleteChild = (chId, callback) =>{
        db.query(`DELETE FROM Child WHERE Child_Id = ? `, [chId], (err, results) =>{
            if(err){
                callback(err, null)
            }
            else{
                callback(null, results)
            }
        })
    };

    unixToFormattedTime = (unixTimestamp) =>{
        
        const date = new Date(unixTimestamp);
        const formattedString = date.toISOString();
        return formattedString.substring(0,10);

        
    }

    formattedTimeToUnix = (formattedTime) =>{
        return (new Date(formattedTime)).getTime();
    }

    dateToFormattedTime = (date) =>{
        return date.toISOString().substring(0,10);
    }
}

module.exports = new ChildModel;

