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
        db.query(`SELECT Vaccine FROM MR_Vaccinations WHERE MR_Id =${mrid} and Vaccine =${vaccine}`, (err, result) =>{
            if(err){ callback(err, null) }
            else{
                callback(null, result.map(x => x.Vaccine));
            }
        })
    }

    addVaccineById = (mrid, vaccine, callback) =>{
        
    }

    updateVaccineById = (mrid, vaccine, callback) =>{

    }

    deleteVaccineById = (mrid, vaccine, callback) =>{

    }

    
}

module.exports = new VaccinationModel;