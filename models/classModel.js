const db = require('../repos/db')


class ClassModel{

    findAll = (callback) => {
    
        db.query('SELECT * FROM Class', (err, results ) =>{
                if (err){
                    callback(err, null);
                    return;
                }
                //console.log(results);
                //console.log(results);
                callback(null, results);
                return;
                
            });   
    }

    addClass = (input, callback) => {
        const {cid, progName, className, time, tid} = input
        db.query(`INSERT INTO Class(Prog_name, Class_name, Time, T_Id) VALUES(?,?,?,?)`, [cid, progName, className, time, tid], (err, results, fields) =>{
            if(err){
            callback(err, null)
            }
            else{
                callback(null, results);
            }
        })
    }

    findOne = (cid, callback) => {
        db.query(`SELECT * FROM Class WHERE C_Id = ?`, [cid], (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }

    delete = (cid, callback) => {
        db.query(`DELETE FROM CLASS WHERE C_Id = ?`, [cid], (err,results) => {
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }

    updateClass = (input, callback) => {
        const{cid, progName, }
        db.query(`UPDATE Class
                SET 
                Prog_name = ?,
                Class_name = ?,
                Time = ?,
                T_Id = ?
                WHERE C_Id = ?`,
                Time)
    }
}