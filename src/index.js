const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

app.use(require('./routes/routes'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on port '+ PORT));