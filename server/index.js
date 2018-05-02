const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const cerealRouter = require('./routes');

// app.use('/api', cerealRouter);

app.get('/', (req, res)=>{
    res.send('Welcome to Double Z Cereal Emporium!')
});

app.use((err, req, res, next) => {
    res.status(500).send('The Cereal Killer it\'s coming!')
})

module.exports = app;