const db = require('../repos/db')


class fieldtripModel{

    findAll = (callback) => {
    
        db.query('SELECT * FROM Field_Trip', (err, results ) =>{
                if (err){
                    callback(err, null);
                    return;
                }

                callback(null, results);
                return;
                
            });   
    }

    addfieldtrip = (input, callback) => {
        const { program, location, tid} = input
        db.query(`INSERT INTO Field_Trip (Program, Location, T_Id) VALUES(?,?,?)`, [program, location, tid], (err, results) =>{
            if(err){
            callback(err, null)
            }
            else{
                callback(null, results);
            }
        })
    }

    findOne = (tripid, callback) => {
        db.query(`SELECT * FROM Field_Trip WHERE Trip_Id = ?`, [tripid], (err, results) =>{
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }

    delete = (tripid, callback) => {
        db.query(`DELETE FROM Field_Trip WHERE Trip_Id = ?`, [tripid], (err,results) => {
            if(err){
                callback(err, null);
            }
            else{
                callback(null, results);
            }
        })
    }

    updatefieldtrip = (input, callback) => {
        const{tripid, program, location, tid} = input;
        db.query(`UPDATE Field_Trip
                SET 
                Program = ?,
                Location = ?,
                T_Id = ?,
                WHERE Trip_Id = ?`,
                [program, location, tid, tripid], (err, result) => {
                    if(err){
                        callback(err, null)
                    }
                    else{
                        callback(null, result)
                    }
                })
    }
}

module.exports = new fieldtripModel