const db = require('../repos/db')

class ProgramModel{

    findAll = (callback) =>{
        db.query(`SELECT * FROM Program`, (err, results) =>{
            if(err){
                callback(err, null)
            }else{
                callback(null, results)
            }
        })
    }

    findProgram = (name, callback) =>{
        db.query(`SELECT * FROM Program WHERE Name = ? `, [name], (err, results) =>{
            if(err){
                callback(err, null)
            }else{
                callback(null, results)
            }
        })
    }

    addProgram = (args, callback) =>{
        const {name, fees, ageGroup} = args
        db.query(`INSERT INTO Program VALUES( ? , ? , ? )`,[name, fees, ageGroup] , (err, results) =>{
            if(err){
                callback(err, null)
            }
            else{
                db.query(`SELECT * FROM Program WHERE Name = ?`,[name], (err,results) =>{
                    if(err){
                        callback(err, null)
                    } else{
                        callback(err, results)
                    }
                })
            }
        })

    }

    updateProgram = (args, callback) =>{
        const {name, fees, ageGroup} = args
        db.query(`
            UPDATE Program
            SET
               Fees = ? ,
               Age_Group = ?
            WHERE Name = ? `, [fees, ageGroup, name], 
                (err, result) =>{
                    if(err){
                        callback(err, null)
                    }else{
                        callback(null, result)
                    }
                })
    }

    deleteProgram = (progName, callback) =>{
        //console.log(progName)
        db.query(`
            DELETE
            FROM Program
            WHERE Name = ? `, [progName], (err,results) =>{
                if(err){
                    callback(err, null)
                }else{
                    callback(null, results)
                }
            })

    }
}

module.exports = new ProgramModel