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

    addChildEmergencyContact = (args, callback) => {
        const {}
    }
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

    getAllChildrenOfParent = (pid, callback) => {
        db.query('SELECT * FROM Child WHERE P_Id = ? ',[pid], (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results.map(x =>{
                    x.Dob = this.dateToFormattedTime(x.Dob)
                    return x;
                }))
            }
        })
    }

    getAllChildrenOfParentByUsername = (username, callback) => {
        db.query(`SELECT C.Child_Id, C.Fname, C.Lname
                FROM Child As C, Primary_Parent as P 
                WHERE C.P_Id = P.P_Id and P.Username = ?  `,[username], (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results)
            }
        })
    }

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

