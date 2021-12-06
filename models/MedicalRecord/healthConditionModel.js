const db = require('../../repos/db')

class HealthConditionModel{
    findAllById = (mrid, callback) => {
    
        db.query(`SELECT Health_Condition FROM MR_Health_Conditions WHERE MR_Id = ${mrid}`,(err,result)=>{
            if(err){callback(err,null) }
            else{
                callback(null,result.map(x=>x.Health_Condition));
            }
        })
    }

    findOneById = (mrid, condition, callback) =>{
        db.query(`SELECT Health_Condition FROM MR_Health_Conditions WHERE MR_Id = ${mrid} and Health_Condition = "${condition}"`, (err,result)=>{
            if(err){callback(err,null)}
            else{
                callback(null, result.map(x=>x.Health_Condition));
            }

        })
    }

    addConditionById = (mrid, condition, callback) =>{
        db.query(`INSERT INTO MR_Health_Conditions(MR_Id, Health_Condition)
        VALUES(${mrid}, "${condition}")`, (err,results) =>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,results);
            }
        });

    }


    deleteConditionById = (mrid, condition, callback) =>{
        db.query(`DELETE FROM MR_Health_Conditions WHERE MR_Id=${mrid} and Health_Condition="${condition}"`,(err,results)=>{
         if(err){
            callback(err,null);
        }
        else{
            callback(null,results);
    }
    });
}
}


module.exports = new HealthConditionModel;