const { urlencoded } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(require('./routes/routes'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on port '+ PORT));