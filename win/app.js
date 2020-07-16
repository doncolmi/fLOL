const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cor = require('cors');
const dotenv = require('dotenv');
const mongo = require('./bin/mongoose');
const toast = require('./src/model/data/toastData');

const indexRouter = require('./src/controller/index');
const userRouter = require('./src/controller/user');
const groupRouter = require('./src/controller/group');

const app = express();

require('dotenv').config();

app.use(cor());
mongo();
toast.saveToast();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/g', groupRouter);

module.exports = app;
