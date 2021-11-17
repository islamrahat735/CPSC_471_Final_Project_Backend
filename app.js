const Joi = require('joi')
const express = require('express');
var cors = require('cors')
const coursesRoute = require('./routes/courses')
const checksRoute = require('./routes/check')

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/courses", coursesRoute)
app.use("/api/check", checksRoute)

app.get('/', (req, res) => {
    res.send('Hello World');
});



const port = process.env.PORT || 3001;

app.listen( port, () => console.log(`Listening on port ${port}...`));