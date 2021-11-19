const Joi = require('joi')
const express = require('express');
const router = express.Router()
const db = require('../repos/db')

router.post('/', (req, res) => {
    const {username, password, access} = req.body
    if(username && password && access){
        try{
            db.promise().query(`INSERT INTO Account VALUES('${username}','${password}', '${access}')`);
            res.status(200).send(req.body);
        }
        catch(err){
            console.log(err)
        }
    }
});


module.exports = router;