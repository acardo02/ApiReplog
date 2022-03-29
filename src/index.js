const { urlencoded } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(require('./routes/routes'));


app.listen(3000);
console.log("Server on port 3000");