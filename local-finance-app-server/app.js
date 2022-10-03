const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
//app.use(logger('dev'));
app.disable('etag');
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.all('*', (req, res) =>{
    return res.status(404).send({
        message: 'Page not found'
    })
})


module.exports = app;
