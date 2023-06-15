//en app.js definimos routers y dependiendo de las solicitudes de url se definen los archivos de rutas convenientes

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
let db = require('./database/models')
var logger = require('morgan');
const session = require('express-session'); //requerimos session en el entrypoint


//esto 
var indexRouter = require('./routes/index');
//aca declaramos una variable utilizando la funcion de node.js require para importar un archivo que se encuentra en la ruta .routes/index
var usersRouter = require('./routes/users');
let productsRouter = require('./routes/products')
let registerRouter = require('./routes/register')
let profileRouter = require('./routes/profile')
let profileEditRouter = require('./routes/profileEdit')
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

app.use(session(
{
  secret:"Lorniaz",
  saveUninitialized: true,
  resave: false
}
));

//middleware: pasar datos de session a las vistas
app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user
    return next ();
  }
return next ();
})

app.use(function(req, res, next){
  if (req.cookies.Galleta != undefined && req.session.user == undefined){
    let datosRecordados = req.cookies.Galleta;
    db.User.findByPk (datosRecordados.id)
    .then((user)=>{
      //return res.send(user)
      req.session.user = user
      res.locals.user = user
      return next()
    }) .catch((err)=>{
      console.log(err)
    });
  } else{
    return next()
  }
}
)

//la sesion se indica antes de las rutas
app.use('/', indexRouter);
//El segundo argumento indica que todas las solicitudes que coincidan con el prefijo de URL especificado se manejarán utilizando las rutas definidas en este objeto Router.
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/register', registerRouter)
app.use('/profile', profileRouter)
app.use('/profileEdit', profileEditRouter)
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


