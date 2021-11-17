const Joi = require('joi')
const express = require('express');
var cors = require('cors')
const coursesRoute = require('./routes/courses')

const app = express();

app.use(express.json());
app.use(cors())
app.use("", coursesRoute)





const port = process.env.PORT || 3001;

app.listen( port, () => console.log(`Listening on port ${port}...`));