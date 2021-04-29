var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./database")
require("dotenv").config({ path : ".env" });
const cors = require("cors");

var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var forgotpasswordRouter = require('./routes/forgotpassword');
var usersRouter = require('./routes/users');
var settingsRouter = require('./routes/settings');
var feedRouter = require('./routes/feed');
var ordersRouter = require('./routes/orders');
var friendsRouter = require('./routes/friends');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/register', registerRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/forgotpassword', forgotpasswordRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/settings', settingsRouter);
app.use('/api/v1/feed', feedRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/friends', friendsRouter);

// app.use('/api/v1/orders/:id/status', ordersRouter);
// app.use('/api/v1/users/:id', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 404);
//   res.json({
//     status: "error",
//     message: "API not found.",
//   });
// });

module.exports = app;
