const express = require('express');
const path = require('path');
const template = require('art-template');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

app.use('/public/',express.static(path.join(__dirname,'/public')));
app.use('/node_modules/',express.static(path.join(__dirname,'/node_modules')));

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router);

app.listen(8000,() => {
    console.log('running sucess localhost:8000')
})
