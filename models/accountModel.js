const db = require('../repos/db')

class AccountModel{

    findAll = (callback) => {
    
        db.query('SELECT * FROM Account', (err, results ) =>{
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

    addAccount = (username, password, access, result) => {
        db.query(`INSERT INTO Account VALUES('${username}','${password}', '${access}')`, (err, results, fields) =>{
            if(err){
                result(err, null)
            }
            else{
                result(null, results);
            }
        })
    }

    findOne = (username, result) => {
        db.query(`SELECT * FROM Account WHERE Username = "${username}"`, (err, results) =>{
            if(err){
                result(err, null);
            }
            else{
                result(null, results);
            }
        })
    }

    delete = (username, result) => {
        db.query(`DELETE FROM Account WHERE Username = "${username}"`, (err, results) =>{
            if(err){
                result(err, null);
            }
            else{
                result(null, result);
            }
        });
    }
}

module.exports = new AccountModel;