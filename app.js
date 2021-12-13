const Joi = require('joi')
const express = require('express');
var cors = require('cors')
require('events').EventEmitter.prototype._maxListeners = 100;
const coursesRoute = require('./routes/courses')
const checksRoute = require('./routes/check')
const accountRoute = require('./routes/account')
const parentRoute = require('./routes/parent')
const childRoute = require('./routes/children')
const emergencyContactRoute = require('./routes/emergencyContact')
const mrVaccinationRoute = require('./routes/MedicalRecord/vaccination')
const medicalRecordRoute = require('./routes/MedicalRecord/medicalRecord')
const mrhealthConditionRoute=require('./routes/MedicalRecord/healthCondition')
const mrallergyRoute=require('./routes/MedicalRecord/allergy')
const employeeRoute=require('./routes/employee')
const programRoute = require('./routes/program')
const nurseRoute = require('./routes/nurse')
const caretakerRoute = require('./routes/caretaker')
const adminRoute=require('./routes/admin')
const app = express();

app.use(express.json());
app.use(cors())
//app.use("/api/courses", coursesRoute)
//app.use("/api/check", checksRoute)
app.use("/api/account", accountRoute)
app.use("/api/parent", parentRoute)
app.use("/api/child", childRoute)
app.use("/api/emergencyContact", emergencyContactRoute)
app.use("/api/medicalRecord", medicalRecordRoute)
app.use("/api/mr/vaccination", mrVaccinationRoute)
app.use("/api/mr/healthCondition", mrhealthConditionRoute)
app.use("/api/mr/allergy", mrallergyRoute )
app.use("/api/employee", employeeRoute)
app.use("/api/program", programRoute)
app.use("/api/nurse", nurseRoute)
app.use("/api/caretaker", caretakerRoute)
app.use("/api/admin", adminRoute)
app.get('/', (req, res) => {
    res.send('Hello ');
});



const port = process.env.PORT || 3001;

app.listen( port, () => console.log(`Listening on port ${port}...`));