const e = require('cors');
const db = require('../../repos/db')

class VaccinationModel{
    findAllById = (mrid, callback) => {

        db.query(`SELECT Vaccine FROM MR_Vaccinations WHERE MR_Id =${mrid}`, (err, result) =>{
            if(err){ callback(err, null) }
            else{
                callback(null, result.map(x => x.Vaccine));
            }
        })

    }

    findOneById = (mrid, vaccine, callback) =>{
        db.query(`SELECT Vaccine FROM MR_Vaccinations WHERE MR_Id =${mrid} and Vaccine ="${vaccine}"`, (err, result) =>{
            if(err){ callback(err, null) }
            else{
                callback(null, result.map(x => x.Vaccine));
            }
        })
    }

    addVaccineById = (mrid, vaccine, callback) =>{
        db.query(`INSERT INTO MR_Vaccinations(MR_Id, Vaccine)
        VALUES(${mrid}, '${vaccine}')`, (err, results) => {
            if (err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        });
        
    }

    // updateVaccineById = (mrid, vaccine, callback) =>{
    //     db.query( `UPDATE MR_Vaccinations
    //     SET 
    //         Vaccine = '${vaccine}'
    //     WHERE
    //         MR_Id = ${mrid}`, (err, results) =>{
    //             if(err){
    //                 callback(err, null);
    //             }
    //             else{
    //                 db.query(`SELECT * FROM MR_Vaccinations WHERE MR_Id = ${mrid} and Vaccine = ${vaccine}`, (err, results) =>{
    //                     if(err){
    //                         callback(err, null);
    //                     }
    //                     else{
    //                         callback(null, results);
    //                     }
    //                 })
    //             }
    //         });

    // }

    deleteVaccineById = (mrid, vaccine, callback) =>{
        db.query(`DELETE FROM MR_Vaccinations WHERE MR_Id = ${mrid} and Vaccine = "${vaccine}"`, (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        });
    }

    
}

module.exports = new VaccinationModel;