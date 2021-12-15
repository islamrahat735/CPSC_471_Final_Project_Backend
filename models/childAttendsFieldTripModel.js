const db = require('../repos/db')

class ChildAttendsFieldTripModel{
    findAll = (callback) =>{
        db.query(`SELECT * FROM Child_Attends_Field_Trip`, (err, results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    findOne = (chId, callback) =>{
        db.query(`SELECT * FROM Child_Attends_Field_Trip WHERE Ch_Id = ?`,[chId], (err, results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }

    add = (chId, trId, callback) =>{
        db.query(`INSERT INTO Child_Attends_Field_Trip(Child_Id, Trip_Id) Values(?,?)`,[chId, trId], (err,results) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, results);
            }
        })
    }
}

module.exports = new ChildAttendsFieldTripModel