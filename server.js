const express = require('express');
const mongodb = require('./database/mongodb');
const app = express();
const port = process.env.PORT || 8080;



app
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use('/', require('./routes/index'));

mongodb.connectDB();

app.listen(port, () =>
console.log(`Running on port ${port}`));