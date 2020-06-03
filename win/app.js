const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cor = require('cors');
const dotenv = require('dotenv');
const mongo = require('./bin/mongoose');

const indexRouter = require('./controller/index');
const userRouter = require('./controller/user');

const app = express();

require('dotenv').config();

app.use(cor());
mongo();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;
