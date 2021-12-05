const db = require('../../repos/db')

class MedicalRecordModel{

    findAll = (callback) => {
        db.query(`SELECT * FROM Medical_Record`, (err, results) =>{
            if(err)
                callback(err, null)
            else
                callback(null, results)
        })

    }

    findOneById = (mrid, callback) =>{
        db.query(`SELECT * FROM Medical_Record WHERE MR_Id = ${mrid}`, (err, results) =>{
            if(err)
                callback(err, null)
            else
                callback(null, results)
        })
    }

    addRecord = (covidStatus, callback) =>{
        db.query(`INSERT INTO Medical_Record(Covid_Status)
        VALUES("${covidStatus}")`, (err, results)=> {
            if(err)
                callback(err, null)
            else{
                db.query(`SELECT * FROM Medical_Record as M
                        WHERE  M.MR_Id IN
                        (SELECT Max(MR_Id)
                        FROM Medical_Record)`, (err, results)=>{
                            if(err){
                                callback(err, null);
                            }
                            else{
                                callback(null, results);
                            }
                        })
            }
        })

    }

    updateRecord = (mrid, covidStatus, callback) =>{
        db.query( `UPDATE Medical_Record
        SET 
            Covid_Status = '${covidStatus}'
        WHERE
            MR_Id = ${mrid}`, (err, results) =>{
                if(err){
                    callback(err, null);
                }
                else{
                    db.query(`SELECT * FROM Medical_Record WHERE MR_Id = ${mrid} and Covid_Status = "${covidStatus}"`, (err, results) =>{
                        if(err){
                            callback(err, null);
                        }
                        else{
                            callback(null, results);
                        }
                    })
                }
            });
    }

    deleteRecord = (mrid, callback) =>{
        db.query(`DELETE FROM Medical_Record WHERE MR_Id = ${mrid}`, (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        });
    }

}

module.exports = new MedicalRecordModel;