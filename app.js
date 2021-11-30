const Joi = require('joi')
const express = require('express');
var cors = require('cors')
const coursesRoute = require('./routes/courses')
const checksRoute = require('./routes/check')
const accountRoute = require('./routes/account')
const parentRoute = require('./routes/parent')

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/courses", coursesRoute)
app.use("/api/check", checksRoute)
app.use("/api/account", accountRoute)
app.use("/api/parent", parentRoute)


app.get('/', (req, res) => {
    res.send('Hello World');
});



const port = process.env.PORT || 3001;

app.listen( port, () => console.log(`Listening on port ${port}...`));