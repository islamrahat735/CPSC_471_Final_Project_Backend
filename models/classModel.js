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
        const { progName, className, startTime, endTime, tid} = input
        db.query(`INSERT INTO Class(Prog_name, Class_name, startTime, endTime, T_Id) VALUES(?,?,?,?,?)`, [progName, className, startTime, endTime, tid], (err, results, fields) =>{
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
        const{cid, progName,className, startTime, endTime, tid } = input;
        db.query(`UPDATE Class
                SET 
                Prog_name = ?,
                Class_name = ?,
                startTime = ?,
                endTime = ?,
                T_Id = ?
                WHERE C_Id = ?`,
                [progName,className, startTime, endTime, tid, cid], (err, result) => {
                    if(err){
                        callback(err, null)
                    }
                    else{
                        callback(null, result)
                    }
                })
    }

    findAllByTeacher = (tid, callback) => {
    
        db.query('SELECT * FROM Class WHERE T_Id = ?', [tid], (err, results ) =>{
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

    getClasslist = (cId, callback) => {
        db,query(`SELECT CH.Child_Id, CH.Fname, CH.Lname FROM Class as C, Programs as P, Child as CH WHERE C.Prog_name = P.Name
                 and CH.Prog_name = P.Name and C.Class_name = ?`, [cId], (err, results) =>{
                     if(err){
                         callback(err, null)
                     }else{
                         callback(null, err)
                     }
                 })
    }
}

module.exports = new ClassModel