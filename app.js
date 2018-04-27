var express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    session = require('express-session');

//var indexRoute = require('./routes/index');    
var load = require('express-load');
var app = express();

//console.log(indexRoute.route);

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
  secret: 'y@p0zt@z',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

//app.get('/', indexRoute);
//app.get('/usuarios', routes.user.index);


load('models')
  .then('controllers')
  .then('routes')
  .into(app);


//module.exports = app;
app.listen(3000, function(){ console.log("Ntalk no ar."); }); 
