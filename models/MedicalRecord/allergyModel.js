const db = require('../../repos/db')

class AllergyModel{
    findAllById = (mrid, callback) => {
        db.query(`SELECT Allergy FROM MR_Allergies WHERE MR_Id =${mrid}`, (err, result) =>{
            if(err){ callback(err, null) }
            else{
                callback(null, result.map(x => x.Allergy));
            }
        })

    }

    findOneById = (mrid, allergy, callback) =>{
        db.query(`SELECT Allergy FROM MR_Allergies WHERE MR_Id =${mrid} and Allergy ="${allergy}"`, (err, result) =>{
            if(err){ callback(err, null) }
            else{
                callback(null, result.map(x => x.Allergy));
            }
        })
    }

    addAllergyById = (mrid, allergy, callback) =>{
        db.query(`INSERT INTO MR_Allergies (MR_Id, Allergy)
        VALUES(${mrid}, "${allergy}")`, (err, results) => {
            if (err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        });
        
    }

    //updateAllergyById = (mrid, allergy, callback) =>{

    //}

    deleteAllergyById = (mrid, allergy, callback) =>{
        db.query(`DELETE FROM MR_Allergies WHERE MR_Id = ${mrid} and Allergy = "${allergy}"`, (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        });
    }

    
}

module.exports = new AllergyModel;
