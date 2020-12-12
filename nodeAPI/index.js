const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/router')
const authRouter = require('./routes/authRouter')

const app = express();

app.use(bodyParser.json());


app.use('/get',router);
app.use('/auth',authRouter);
app.listen(4000);
