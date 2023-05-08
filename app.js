//en app.js definimos routers y dependiendo de las solicitudes de url se definen los archivos de rutas convenientes

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//esto 
var indexRouter = require('./routes/index');
//aca declaramos una variable utilizando la funcion de node.js require para importar un archivo que se encuentra en la ruta .routes/index
var usersRouter = require('./routes/users');
let productsRouter = require('./routes/products')
let registerRouter = require('./routes/register')
let profileRouter = require('./routes/profile')
let searchResultsRouter = require('./routes/searchResults')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//esto 
app.use('/', indexRouter);
//El segundo argumento indica que todas las solicitudes que coincidan con el prefijo de URL especificado se manejarán utilizando las rutas definidas en este objeto Router.
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/register', registerRouter)
app.use('/profile', profileRouter)
app.use('/profile-edit', profileRouter)
app.use('/search-results', searchResultsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
