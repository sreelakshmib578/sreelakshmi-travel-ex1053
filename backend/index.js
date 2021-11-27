const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Data base connection
const db = require('./config/database');

db.authenticate()
    .then(() => {
        console.log("Database connected...");
    })
    .catch(error => {
        console.log("database cnnection error: " + error);
    })

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//routes
app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
db.sync()
    .then(() => {
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
    })
    .catch(error => {
        console.log("Error: " + error)
    })