var express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    error = require('./middleware/error'),
    load = require('express-load');

var app = express();

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

app.use(error.notFound);
app.use(error.serverError);

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function(){ console.log("Ntalk no ar."); }); 
